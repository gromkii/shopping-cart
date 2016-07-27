(function(){
  angular
    .module('checkout', ['ngRoute'])
    .config(routeConfig)
    .controller('CheckoutController', CheckoutController)

  routeConfig.$inject = ['$routeProvider', '$locationProvider'];
  CheckoutController.$inject = ['Cart'];

  function routeConfig($routeProvider, $locationProvider){
    $routeProvider
      .when('/checkout', {
        templateUrl:'/views/checkout.html',
        controller:'CheckoutController',
        controllerAs:'checkout'
      })

    $locationProvider.html5Mode({
      enabled:true,
      requireBase: false
    })
  }

  function CheckoutController(Cart){
    var store = this;
    store.cart = Cart;


    store.removeItem = removeItem;
    store.editCost = editCost;
    store.totalCost = totalCost();

    function removeItem(index){
      Cart.items.splice(index,1);
      store.totalCost = totalCost();
    }

    function totalCost(){
      var total = 0;
      store.cart.items.map(element =>{
        total += (element.price/100 * element.quantity);
      })

      return total;
    }

    function editCost(quantity, editQuantity, edit){
      console.log(quantity,editQuantity,edit);
      quantity = editQuantity;
      edit = false;
      store.totalCost = totalCost();
      console.log(quantity, edit);
    }
  }
})();
