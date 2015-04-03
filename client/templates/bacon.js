if (Meteor.isClient) {
  Template.bacon.events({
    'click .yes': function () {
      Session.set('bacon', true);
      Router.go('/drinks');
    }
  });
}