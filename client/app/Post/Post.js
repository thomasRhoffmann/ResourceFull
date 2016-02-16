angular.module('app.Post', ['app.User'])

.controller('PostController', function ($scope, $http, $window, $location) {
	$scope.post = {};

	$scope.addPost = function (post) {
		return $http({
      method: 'POST',
      url: '/post',
      data: post
    })
    .then(function(resp) {
    	return resp;
    }, function(resp) {
    	return resp;
    })
	}

  $scope.signout = function () {
    $window.localStorage.removeItem('com.resourcefull');
    $location.path('/signin');
  }
});