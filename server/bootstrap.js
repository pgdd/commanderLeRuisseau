Meteor.startup(function () {
  console.log('try to connect');

Meteor.startup(function(){
    if(Products.find().count() === 0){
      Products.insert({name:"Oeuf mayonnaise",catName:"Starter",price: 4.5}),
      Products.insert({name:"Nachos et guacamole",catName:"Starter",price: 5}),
      Products.insert({name:"Quesadillas au poulet",catName:"Starter",price: 10}),
      Products.insert({name:"Jambon de parme mozza di bufala",catName:"Starter",price: 12.5}),
      Products.insert({name:"Cheddar burger",catName:"Burger",ingredients:"(Cheddar fondu, oignons confits, laitue iceberg, pickles)",price: 12}),
      Products.insert({name:"BBQ Cheddar",catName:"Burger", ingredients:"(Sauce barbecue, cheddar fondu, oignons rouges, laitue iceberg, pickles)",price: 12}),
      Products.insert({name:"Blue cheese burger",catName:"Burger", ingredients:"(Crème moutarde à l'ancienne, bleu fondu, oignons confits, roquette, miel moutarde)",price: 12}),
      Products.insert({name:"Goat cheese burger",catName:"Burger", ingredients:"(Miel, moutarde, ketchup, St Maure de Touraine, oignons confits, pousses d'épinards, noix)",price: 12}),
      Products.insert({name:"Chicken burger",catName:"Burger", ingredients:"(Filet de poulet pané maison, laitue iceberg, sauce tartare)", price: 12}),
      Products.insert({name:"Tom burger",catName:"Burger", ingredients:"(Tome de vache au cidre, ketchup, moutarde, oignons confits, laitue iceberg, pickles)", price: 12}),
      Products.insert({name:"Tartare burger",catName:"Burger", ingredients:"(Viande hachée et préparée minute. A/R, Tomme fondue)",price: 14}),
      Products.insert({name:"Veggie burger",catName:"Burger", ingredients:"(Steak de pois chiche carottes, cumin, sauce jus de citron coriandre et raifort)",price: 12}),
      Products.insert({name:"Paire de mini burger",catName:"Burger", ingredients: "(Au choix. 2 minis burgers à la carte sauf veggie)", price: 14}),
      Products.insert({name:"Coca",catName:"Drinks"}),
      Products.insert({name:"Coca",catName:"Drinks"}),
      Products.insert({name:"Coca",catName:"Drinks"}),
      Products.insert({name:"Coca",catName:"Drinks"}),
      Products.insert({name:"Coca",catName:"Drinks"})
    };

    if(Categories.find().count() === 0){
        var stid = Categories.insert({name:'Starter', cat:stid});
        var buid = Categories.insert({name:'Burger', cat:buid});
        var drid = Categories.insert({name:'Drinks', cat:drid});
    }

    if(Cookings.find().count() === 0){
      Cookings.insert({name:"Bleu"}),
      Cookings.insert({name:"Saignant"}),
      Cookings.insert({name:"A."}),
      Cookings.insert({name:"Bien cuit"})
    }

});
Meteor.methods({
    //delete when live
    removeAll:function(){
        Products.remove({});
        Categories.remove({});
        CartItems.remove({});
    },
    addToCart:function(qty,product,cooking,bacon,drink,session){
        if(qty > 0){
            CartItems.insert({qty:qty,product:product,cooking:cooking,bacon:bacon,drink:drink,sessid:session});
        } else{
            console.log('Quantity is Zero');
        }

    },
    removeCartItem:function(id){
        CartItems.remove({_id:id});
    }
});
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

