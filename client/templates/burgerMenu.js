if (Meteor.isClient) {
  Meteor.subscribe('menu');
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

  Template.burgerMenu.events({
    'click .inc': function () {
      Meteor.call('updateUserCharge', Session.get("selectedBurger"), Meteor.user());
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
    }
  });
};