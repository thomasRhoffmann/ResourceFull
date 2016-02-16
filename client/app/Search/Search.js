angular.module('app.Search', ['app.User'])

.controller('SearchController', function ($scope, $http, $window, $location) {
	$scope.data = {};
	$scope.search = {};

	$scope.findResources = function() {
		return $http({
      method: 'POST',
      url: '/search',
      data: $scope.search
    })
    .then(function(resp) {
    	$scope.data.searchResults = resp.data;
    }, function(resp) {
    	return resp;
    })
	}

  $scope.signout = function () {
    $window.localStorage.removeItem('com.resourcefull');
    $location.path('/signin');
  }
})