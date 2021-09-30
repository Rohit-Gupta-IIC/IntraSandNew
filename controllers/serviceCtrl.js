app.controller('serviceCtrl', function($scope, localdb, $window){
	$scope.services = localdb.services;
})