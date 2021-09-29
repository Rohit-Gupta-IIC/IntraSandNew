app.controller('serviceCtrl', function($scope, localdb){
	$scope.services = localdb.services;
})