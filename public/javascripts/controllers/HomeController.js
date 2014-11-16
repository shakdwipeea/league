angular.module('League')
.controller('HomeController',function($scope,$http) {
  $scope.players = [];
  $http.get('/players').success(function(data) {
    $scope.players = data;
  });
})
