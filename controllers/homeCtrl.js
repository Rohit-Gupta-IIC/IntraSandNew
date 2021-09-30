app.controller('homeCtrl', function($scope, localdb, $rootScope){
    $scope.transitionState = $rootScope.transitionState;
	$scope.services = localdb.services;

	$('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });


 });

