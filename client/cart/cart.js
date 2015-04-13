Template.cart.cartitems = function(){

};
Template.cart.helpers({
    'cartitems':function(){
        var shopCart = [];
        var cartItems = CartItems.find({});
        var total = 0;
        Session.set('numMenuInCart', cartItems.count())

    cartItems.forEach(function(cartitem){
        var extra = 0
        var item = _.extend(cartitem,{});
        var product = Products.findOne({_id:cartitem.product});
        cartitem.bacon = cartitem.bacon;
        if(cartitem.bacon === true){
            bacon = Products.findOne({name:'bacon'})
            extra = bacon.price;
            cartitem.extraPrice = extra;
        }
        cartitem.cooking = Cookings.findOne({_id:cartitem.cooking});
        cartitem.drink = Products.findOne({_id:cartitem.drink});
        cartitem.productname = product.name;
        cartitem.price = (Number(product.price) * cartitem.qty + Number(extra));
        total += cartitem.price;
        shopCart.push(cartitem);
    });
    shopCart.subtotal = total;
    shopCart.tax = shopCart.subtotal * .00;
    shopCart.total = shopCart.subtotal + shopCart.tax;
    return shopCart;
    },
    differentMenus: function () {
        return Session.get('numMenuInCart') > 1
    }
})

Template.cart.events({
    'click .removeci':function(evt,tmpl){
        Meteor.call('removeCartItem',this._id);
    },
    'click .addMenu' :function(evt,tmpl){
        Session.set('newMenu', true);
        removeSessionsSelection();
        Router.go('/');
    },
    'click .order' :function(evt,tmpl){
        console.log('order is confirmed');
    },
    'click .removeci':function(evt,tmpl){
        Meteor.call('removeCartItem',this._id);
    },
});
Template.cartitem.helpers({
  isBacon: function (bool) {
    return bool === true;
  }
});
Template.cart.rendered = function () {
    Session.set("previousPage", '/');
    Session.set('confirmationIsInHold', true);
};

function removeSessionsSelection() {
  delete Session.keys['selectedBurger'];
  delete Session.keys['selectedCooking'];
  delete Session.keys['bacon'];
  delete Session.keys['selectedDrink'];
  delete Session.keys['confirmationIsInHold'];
}
