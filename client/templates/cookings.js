if (Meteor.isClient) {
  Meteor.subscribe('products');
  Meteor.subscribe('cookings');
  Template.cooking.helpers({
    selectedCooking: function () {
      return Cookings.findOne(Session.get("selectedCooking"));
    }
  });
  Template.cookings.helpers({
    cookings: function () {
      return Cookings.find();
    },
    selectedName: function () {
      var cooking = Cookings.findOne(Session.get("selectedCooking"));
      return cooking && cooking.name;
    }
  });
  Template.cookings.events({
    'click .inc': function () {
      Session.set('initiatedOrder', true);
      Router.go('/bacon');
    }
  });
  Template.cooking.helpers({
    selected: function () {
      return Session.equals("selectedCooking", this._id) ? "selected" : '';
    }
  });
  Template.cooking.events({
    'click': function () {
      Session.set("selectedCooking", this._id);
      console.log(Session.get("selectedCooking"));
    }
  })
}