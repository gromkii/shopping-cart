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
    console.log(Cart);
  }
})();
