(function(){
  angular
    .module('shoppingApp', ['ngRoute', 'Teas', 'title', 'shoppingCart'])
    .config(routeConfig)

  routeConfig.$inject = ['$routeProvider', '$locationProvider'];

  function routeConfig($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl:'/views/show.html',
        controller:'ShoppingCartController',
        controllerAs:'shoppingCart'
      });

    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    });
  }
})();
