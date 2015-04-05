Meteor.startup(function () {
  if(Meteor.isCordova){
    StatusBar.show();
    App.setPreference('StatusBarStyle', 'default');
    App.setPreference('StatusBarBackgroundColor', '#2C53AE');
  }
});