angular.module('PetShop', []).controller('AnimalsCtrl',
  function($scope) {
  $scope.$parent.name = "Dogão";

  $scope.welcome = function() {
    alert('Olá ' + $scope.customer +
      ', seja bem vindo ao nosso petshop!');
  };
});