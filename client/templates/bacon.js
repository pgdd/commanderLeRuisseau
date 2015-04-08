if (Meteor.isClient) {
  Template.bacon.events({
    'click .yes': function () {
      Session.set('bacon', true);
      Session.set('previousPage', '/bacon');
      Router.go('/drinks');
    },
    'click .no': function () {
      Session.set('bacon', false);
      Router.go('/drinks');
    }
  });
  Template.bacon.rendered = function () {
    Session.set("previousPage", '/cooking');
  };
}