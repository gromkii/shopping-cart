(function(){
  angular
    .module('title',[])
    .directive('titleDirective', titleDirective);

  function titleDirective(){
    var directive = {
      restrict:'EA',
      controller: TitleDirectiveController,
      controllerAs:'title',
      templateUrl:'/views/partials/title.html'
    }


    function TitleDirectiveController(){
      this.greeting = 'Sup';
    }

    return directive;
  }
})();
