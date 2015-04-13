if (Meteor.isClient) {
  Meteor.subscribe('menu');
  Meteor.subscribe('products');
  Meteor.subscribe('cookings');
  Meteor.subscribe('cartitems');
  Meteor.subscribe('cart');
  Template.signin.rendered = function () {
    Meteor.subscribe("users");
  };

  // Template.takeAway.rendered = function () {
  //   return Tracker.autorun(function () {
  //     var cartItems = CartItems.find({})
  //     var count = cartItems.count();
  //   });
  // };

  Template.takeAway.helpers({
    initiatedOrder: function () {
        initiatedOrder = Session.get('initiatedOrder');
        return initiatedOrder;
    }
  });

  Template.burgerMenu.rendered = function () {
    Meteor.subscribe("users");
    Session.set("previousPage", 'false');
  };


  Template.burgerMenu.helpers({
    burgers: function () {
      return Products.find({catName: 'Burger'});
    },
    selectedName: function () {
      // var burger = Products.findOne(Session.get("selectedBurger"));
      // return burger && burger.name;
    }
  });
  Template.burgerMenu.events({
    'click .inc': function () {
      Session.set('initiatedOrder', true);
      Router.go('/cooking');
    }
  });

  Template.burger.helpers({
    selected: function () {
      return Session.equals("selectedBurger", this._id) ? "selected" : '';
    }
  });

  Template.burger.events({
    'click': function () {
      Session.set("selectedBurger", this._id);
      console.log(Session.get("selectedBurger"));
      Session.set("previousPage", '/');
      console.log(Session.get('previousPage'));
      Router.go('/cooking');
    }
  });

  Template.selection.helpers({
    selectedBurger: function () {
      var burger = Products.findOne(Session.get("selectedBurger"));
      return burger && burger.name;
    },
    selectedCooking: function () {
      var cooking = Cookings.findOne(Session.get("selectedCooking"));
      return cooking && cooking.name;
    },
    selectedBacon: function () {
      return Session.get("bacon");
    },
    selectedDrink: function () {
      var drink = Products.findOne(Session.get("selectedDrink"));
      return drink && drink.name;
    },
    confirmedMenu: function () {
      return Session.get("confirmationIsInHold");
    }
  });
};
