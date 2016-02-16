angular.module('app', [
  'app.Post',
  'app.Search',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/post', {
      templateUrl: 'app/Post/Post.html',
      controller: 'PostController'
    })
    .when('/search', {
      templateUrl: 'app/Search/Search.html',
      controller: 'SearchController'
    })
     .otherwise({
       redirectTo: '/search'
    });
});