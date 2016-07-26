(function(){
  angular
    .module('cartFactory',[])
    .factory('Cart', Cart)

  Cart.$inject = [];

  function Cart(){
    var cartQuantity = {};

    var methods = {
      addToCart: function(store, item, quantity){
        if (!store.cart[item]){
          store.cart[item] = 0;
        }

        store.cart[item] += parseInt(quantity);
        cartQuantity = store.cart;

        return cartQuantity;
      }
    }

    return methods;
  }
})();
