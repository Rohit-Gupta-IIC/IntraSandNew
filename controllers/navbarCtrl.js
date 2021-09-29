app.controller('navbarCtrl', function($scope){
	$(".navbar-nav .nav-item a").click(function(){
		$('#navbarOffcanvasLg').offcanvas('hide');
	});
});