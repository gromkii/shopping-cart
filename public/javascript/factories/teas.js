(function(){
  angular
    .module('Teas',[])
    .factory(Teas)

  function Teas(){
    var teasObject = {
      hey:'sup'
    }

    return teasObject;
  }
})();
