app.controller('navbarCtrl', function($scope, localdb){
	$scope.services = localdb.services;

	$(".offcanvas-body p a").click(function(){
		$('#navbarOffcanvasLg').offcanvas('hide');
	});
});

