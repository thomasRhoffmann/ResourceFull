angular.module('app.User', [])

.controller('UserController', function ($scope, $http) {
	$scope.user = {};
	$scope.signup = function () {
		return $http({
      method: 'POST',
      url: '/signup',
      data: $scope.user
    })
    .then(function(resp) {
    	return resp;
    }, function(resp) {
    	return resp;
    })
	}
});