Meteor.publish('users', function (group) {
  if (Roles.userIsInRole(this.userId, ['admin'], group)) {
    return Meteor.users.find({'profile.inside': true}, {fields: {profile: 1}});
  } else {
    // user not authorized. do not publish secrets
    this.stop();
    return;
  }
});

Meteor.publish("menu", function () {
  return Menu.find();
});
Meteor.publish("products", function () {
  return Products.find();
});
Meteor.publish("cookings", function () {
  return Cookings.find();
});
Meteor.publish("drinks", function () {
  return Cookings.find();
});