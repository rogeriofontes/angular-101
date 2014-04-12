angular.module('Ecommerce', ['ui.bootstrap']).controller('EcommerceCtrl',
  function($scope, $modal) {
    $scope.openModal = function() {
      $modal.open({
        templateUrl: 'modal.html',
        controller: 'ModalCtrl'
      });
    };

    $scope.openModal();
});