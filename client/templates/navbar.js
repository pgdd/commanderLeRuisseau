if (Meteor.isClient) {
  Template.navbar.helpers({
    backButton: function () {
      return Session.get("previousPage");
    },
    basket: function () {
      return (CartItems.find().count() > 0);
    }
  });
  Template.navbar.events({
    'click .left': function () {
      Router.go(Session.get("previousPage"));
    },
    'click .right': function () {
      Router.go('/cart');
    }
  });
};