(function() {
  "use strict";

  angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    //$scope.item = ;
    //$scope.itemArray = [];
    $scope.contador = 0;
    $scope.respuesta = "";

    $scope.split = function () {
      if($scope.item.length > 0 ) {
      $scope.itemArray = $scope.item.split(",");
      $scope.contador = $scope.itemArray.length ;

        for(var i = 0; i < $scope.itemArray.length; i++ ) {
          if($scope.itemArray[i] == ' ' || $scope.itemArray[i] == '' ){
             $scope.contador--;
             }
        }

      }
      else {
        $scope.contador = 0;
      }
      return $scope.contador;
    }

  }
})();
