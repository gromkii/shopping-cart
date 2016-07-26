(function(){
  angular
    .module('title',[])
    .directive('titleDirective', titleDirective);

  titleDirective.$inject = ['Teas']

  function titleDirective(Teas){
    var directive = {
      restrict:'EA',
      controller: TitleDirectiveController,
      controllerAs:'title',
      templateUrl:'/views/partials/title.html'
    }

    function TitleDirectiveController(Teas){
      var store = this;
      store.count = Teas.length;
    }

    return directive;
  }
})();
