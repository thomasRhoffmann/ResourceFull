angular.module('app', [
  'app.Post',
  'app.Search',
  'app.User',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  	// .when('/')
    .when('/post', {
      templateUrl: 'app/Post/Post.html',
      controller: 'PostController'
    })
    .when('/search', {
      templateUrl: 'app/Search/Search.html',
      controller: 'SearchController'
    })
    .when('/signup', {
      templateUrl: 'app/User/SignUp.html',
      controller: 'UserController'
    })
     .otherwise({
       redirectTo: '/search'
    });
});