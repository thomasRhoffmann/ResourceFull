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
    .when('/signin', {
      templateUrl: 'app/User/SignIn.html',
      controller: 'UserController'
    })
     .otherwise({
       redirectTo: '/search'
    });


  $httpProvider.interceptors.push( function($window) {
    var attach = {
      request: function (object) {
        var jwt = $window.localStorage.getItem('com.resourcefull');
        if (jwt) {
          object.headers['x-access-token'] = jwt;
        }
        object.headers['Allow-Control-Allow-Origin'] = '*';
        return object;
      }
    };
    return attach;
  });
})
.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (!Auth.isSignedIn()) {
      $location.path('/signin');
    }
  });
});