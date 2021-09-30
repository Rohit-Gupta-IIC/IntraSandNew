var app = angular.module("mainApp", ['ngRoute']);



app.component('navbar',{
    templateUrl:'components/navbar.html',
    bindings: {
        title: '<'
    }
})

app.component('footbar',{
    templateUrl:'components/footer.html',
})

app.component('home',{
    templateUrl:'pages/home.html',
})

app.component('about',{
    templateUrl:'pages/about.html',
})

app.component('blog',{
    templateUrl:'pages/blog.html',
})

app.component('portfolio',{
    templateUrl:'pages/portfolio.html',
})

app.component('contact',{
    templateUrl:'pages/contact.html',
})

app.component('blogsingle',{
    templateUrl:'pages/blogsingle.html',
})

app.component('services',{
    templateUrl:'pages/services.html',
})
app.component('servicedetail',{
    templateUrl:'pages/service_detail.html',
})

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', { template:'<home></home>',})
  .when('/about', { template:'<about></about>',})
  // .when('/blog', { template:'<blog></blog>',})
  // .when('/portfolio', { template:'<portfolio></portfolio>',})
  .when('/contact', { template:'<contact></contact>',})
  // .when('/blogsingle', { template:'<blogsingle></blogsingle>',})
  .when('/services', { template:'<services></services>',})
  .when('/service_detail/:id', { template:'<servicedetail></servicedetail>',})
  .when('/policy', { templateUrl:'pages/policy.html',})
  .when('/terms', { templateUrl:'pages/terms.html',})
  .otherwise({redirectTo:'/'});
  $locationProvider.html5Mode(true);
  

});