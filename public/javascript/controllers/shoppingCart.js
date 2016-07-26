(function(){
  angular
    .module('shoppingCart', ['ngRoute'])
    .controller('ShoppingCartController', ShoppingCartController)

  ShoppingCartController.$inject = ['Teas', 'Cart'];

  function ShoppingCartController(Teas, Cart){
    var store = this;

    store.cart = {};
    store.data = Teas;
    store.currentCart = Cart;

    store.categories = getCategories();

    function getCategories(){
      var newArray = [];

      store.data.forEach( item => {
        item.categories.forEach( category => {
          newArray.push(category);
        })
      });

      return newArray;
    }
  }
})();
