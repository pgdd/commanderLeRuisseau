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
      if (Session.get("confirmationIsInHold")) {
        Meteor.call('removeAll');
        removeSessionsSelection();
        Router.go(Session.get("previousPage"));
      } else {
        return Router.go(Session.get("previousPage"));
      };
    },
    'click .right': function () {
      Router.go('/cart');
    },
  });
};

function removeSessionsSelection() {
  delete Session.keys['selectedBurger'];
  delete Session.keys['selectedCooking'];
  delete Session.keys['bacon'];
  delete Session.keys['selectedDrink'];
  delete Session.keys['confirmationIsInHold'];
}