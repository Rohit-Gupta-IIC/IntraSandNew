app.controller('serviceDetailctrl', function($scope, $routeParams, localdb){
  $scope.id = $routeParams.id;
  $scope.service = localdb.services.filter(o =>o.name === $scope.id)[0];
  console.log($scope.service);
})