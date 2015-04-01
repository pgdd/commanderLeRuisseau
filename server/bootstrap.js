Meteor.startup(function () {
  console.log('try to connect');
  var testConnection = DDP.connect('http://54.153.137.29:3000/');
  var seeds = [
    {name:"Oeuf mayonnaise",type:"starter",price: 4.5},
    {name:"Nachos et guacamole",type:"starter",price: 5},
    {name:"Quesadillas au poulet",type:"starter",price: 10},
    {name:"Jambon de parme mozza di bufala",type:"starter",price: 12.5},
    {name:"Cheddar burger",type:"burger",ingredients:"(Cheddar fondu, oignons confits, laitue iceberg, pickles)",price: 12},
    {name:"BBQ Cheddar",type:"burger", ingredients:"(Sauce barbecue, cheddar fondu, oignons rouges, laitue iceberg, pickles)",price: 12},
    {name:"Blue cheese burger",type:"burger", ingredients:"(Crème moutarde à l'ancienne, bleu fondu, oignons confits, roquette, miel moutarde)",price: 12},
    {name:"Goat cheese burger",type:"burger", ingredients:"(Miel, moutarde, ketchup, St Maure de Touraine, oignons confits, pousses d'épinards, noix)",price: 12},
    {name:"Chicken burger",type:"burger", ingredients:"(Filet de poulet pané maison, laitue iceberg, sauce tartare)", price: 12},
    {name:"Tom burger",type:"burger", ingredients:"(Tome de vache au cidre, ketchup, moutarde, oignons confits, laitue iceberg, pickles)", price: 12},
    {name:"Tartare burger",type:"burger", ingredients:"(Viande hachée et préparée minute. A/R, Tomme fondue)",price: 14},
    {name:"Veggie burger",type:"burger", ingredients:"(Steak de pois chiche carottes, cumin, sauce jus de citron coriandre et raifort)",price: 12},
    {name:"Paire de mini burger",type:"burger", ingredients: "(Au choix. 2 minis burgers à la carte sauf veggie)", price: 14}
  ];

  for(var meal in seeds) {
    console.log('seeding')
    Menu.insert(seeds[meal]);
  }
  var users = [
    {name:"Pierre",username:"ADMIN",roles:['admin']},
    {name:"John",username:"John",roles:['merchants', 'teams']},
    {name:"Keith",username:"Keith",roles:['merchants', 'managers', 'teams']}
  ];
  console.log(Meteor.users.find().fetch())
  if (Meteor.users.find().count() == 0) {
    console.log('filling the users roles...')
    _.each(users, function (user) {
      var id;

      id = Accounts.createUser({
        username: user.username,
        password: "PASSWORD",
        profile: { name: user.name }
      });
      if (user.roles.length > 0) {
        // Need _id of existing user record so this call must come
        // after `Accounts.createUser` or `Accounts.onCreate`
        Roles.addUsersToRoles(id, user.roles);
      }
    })
  } else {
    return console.log('db already filled in');
  }
});