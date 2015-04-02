if (Meteor.isClient) {
  Template.bacon.events({
    'click .yes': function () {
      Session.set('initiatedOrder', true);
      Router.go('/drinks');
    }
  });
}