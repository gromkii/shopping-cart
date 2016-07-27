(function(){
  angular
    .module('cartFactory',[])
    .factory('Cart', Cart)

  Cart.$inject = [];

  function Cart(){
    var cart = {
      items:[],
      addToCart:addToCart
    };


    function addToCart(tea, quantity){
      // Iterate through cart.items
      var duplicateEntry = 0;
        cart.items.forEach( element => {
          if (element.name === tea.name){
            duplicateEntry += 1;
            element.quantity += parseInt(quantity);
          }
        })

        if (duplicateEntry === 0){
          tea.quantity = parseInt(quantity);
          cart.items.push(tea);
        }

      }

    return cart;
  }

})();
