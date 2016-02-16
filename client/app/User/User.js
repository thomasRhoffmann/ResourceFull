angular.module('app.User', [])

.controller('UserController', function ($scope, $http, $window, $location) {
	$scope.user = {};

	$scope.signup = function () {
		return $http({
      method: 'POST',
      url: '/signup',
      data: $scope.user
    })
    .then(function(resp) {
    	$window.localStorage.setItem('com.resourcefull', resp.data.token);
      $location.path('/search');
    }, function(resp) {
    	return resp;
    })
	}

  $scope.signin = function () {
    return $http({
      method: 'POST',
      url: '/signin',
      data: $scope.user
    })
    .then(function(resp) {
      $window.localStorage.setItem('com.resourcefull', resp.data.token);
      $location.path('/search');
    }, function(resp) {
      return resp;
    })
  }

})
.factory('Auth', function($window) {

  var isSignedIn = function() {
    return !!$window.localStorage.getItem('com.resourcefull');
  };

  return {
    isSignedIn: isSignedIn
  }
})