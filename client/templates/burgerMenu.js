if (Meteor.isClient) {
  Meteor.subscribe('menu');
  Template.takeAway.rendered = function () {
  };
  Template.burgerMenu.rendered = function () {
    Meteor.subscribe("users");
    $("body").css("background-attachment",'inherit');
   };
  Template.signin.rendered = function () {
    Meteor.subscribe("users");
   };

  Template.burgerMenu.helpers({
    burgers: function () {
      return Menu.find({type: 'burger'});
    },
    selectedName: function () {
      var burger = Menu.findOne(Session.get("selectedBurger"));
      return burger && burger.name;
    }
  });
  // function menu(burger, cooking, drink) {
  //   this.burger = burger;
  //   this.cooking = cooking;
  //   this.drink = drink;
  // }

  // function order(menus, status, name, phone)
  //   this.menus = menus;
  //   this.status = status;
  //   this.name = name;
  //   this.phone = name;
  // }
  Template.takeAway.helpers({
    initiatedOrder: function () {
        initiatedOrder = Session.get('initiatedOrder');
        return initiatedOrder;
    }
  });
  Template.burgerMenu.events({
    'click .inc': function () {
      Session.set('initiatedOrder', true);
    }
  });
      // initiateOrder = function () {
      //   var menus = new(Array);
      //   var currentBurger = Menu.findOne(Session.get("selectedBurger"))
      //   var currentMenu = new menu(currentBurger)
      //   currentMenu.cooking = Session.get("selectedCooking")
      //   currentMenu.drink = Session.get("selectedDrink")
      //   var currentOrder= new order()


  Template.burger.helpers({
    selected: function () {
      return Session.equals("selectedBurger", this._id) ? "selected" : '';
    }
  });

  Template.cooking.helpers({
    selectedBurger: function () {
      return Menu.findOne(Session.get("selectedBurger"));
    }
  });

  Template.burger.events({
    'click': function () {
      Session.set("selectedBurger", this._id);
      console.log(Session.get("selectedBurger"));
    }
  });
};