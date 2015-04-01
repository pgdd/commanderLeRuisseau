Meteor.methods({
  updateUserCharge: function (targetUserId, loggedUserId) {
    var loggedInUser = loggedUserId

    if (!loggedInUser ||
        !Roles.userIsInRole(loggedInUser,
                            ['admin'])) {
      throw new Meteor.Error(403, "Access denied")
    }
    var user = Meteor.users.findOne({_id: targetUserId});
    if (user.profile.currentCharge >= 8) {
      Meteor.users.update(targetUserId, {$set: {'profile.currentCharge': 0}})
      Meteor.users.update(targetUserId, {$inc: {'profile.usedCards': 1}})
    } else {Meteor.users.update(targetUserId, {$inc: {'profile.currentCharge': 1}})}
  }
})