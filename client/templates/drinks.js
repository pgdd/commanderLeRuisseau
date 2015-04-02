if (Meteor.isClient) {
  Meteor.subscribe('products');
  Meteor.subscribe('drinks');
  Template.drink.helpers({
    selectedDrink: function () {
      return Products.findOne(Session.get("selectedDrink"));
    }
  });
  Template.drinks.helpers({
    drinks: function () {
      return Products.find({catName: 'Drinks'});
    },
    selectedName: function () {
      var drink = Products.findOne(Session.get("selectedDrink"));
      return drink && drink.name;
    }
  });
  Template.drinks.events({
    'click .inc': function () {
      Session.set('initiatedOrder', true);
      Router.go('/bacon');
    }
  });
  Template.drink.helpers({
    selected: function () {
      return Session.equals("selectedDrink", this._id) ? "selected" : '';
    }
  });
  Template.drink.events({
    'click': function () {
      Session.set("selectedDrink", this._id);
      console.log(Session.get("selectedDrink"));
    }
  })
}