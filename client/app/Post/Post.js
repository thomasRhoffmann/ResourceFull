angular.module('app.Post', [])

.controller('PostController', function ($scope, $http) {
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
});