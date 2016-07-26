(function(){
  angular
    .module('cartFactory',[])
    .factory('Cart', Cart)

  Cart.$inject = [];

  function Cart(){
    var cart = {
      addToCart:addToCart,
    };

    return cart;

    function addToCart(item, quantity){
      cart.items = {};
      if (!cart.items[item]){
        cart.items[item] = 0;
      }

      cart.items[item] += parseInt(quantity);
      console.log(cart.items);
    }
  }
})();
