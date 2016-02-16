angular.module('app.Search', [])

.controller('SearchController', function ($scope, $http) {
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
})