/**
 * ModalInstanceCtrl
 * Author : TrucHV
 */

app.controller('modalInstanceCtrl', function ($scope, $modalInstance, data) {
  $scope.company = data.company;
  $scope.role = data.role;
  /*$scope.ok = function () {
	  $modalInstance.close($scope.selected.item);
  };*/
  
  $scope.cancel = function () {
	  $modalInstance.dismiss('cancel');
  };
});