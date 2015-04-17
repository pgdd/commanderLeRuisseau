Session.setDefault('category', null);
Router.configure({
    layoutTemplate:'takeAway',
});

Router.route('/', function () {
    this.render('burgerMenu');
});

Router.route('/cooking', function () {
   this.render('cookings');
});

Router.route('/bacon', function () {
   this.render('bacon');
});
Router.route('/drinks', function () {
   this.render('drinks');
});
Router.route('/cart', function () {
   this.render('cart');
});

Template.registerHelper('currency', function(num){
  return Number(num).toFixed(2) + '€'  ;
});