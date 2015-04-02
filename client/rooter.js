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


// Router.map(function(){
//     this.route('/','ApplicationLayout');
//     this.route('products', {
//         layoutTemplate:'layout',
//         path:'/:name',
//         data: function() {
//             console.log(this.params.name);
//             Session.set('category',this.params.name);
//         },
//         template:'layout'
//     });
// });
// Template.registerHelper('currency', function(num){
//   return '$' + Number(num).toFixed(2);
// });