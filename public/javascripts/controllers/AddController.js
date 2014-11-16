angular.module('League')
.controller('AddController',function($scope,$http) {
  $scope.add = function() {
    var name = $scope.name;
    $http.post('/secure/new',{
      name:name
    }).success(function(data) {
      console.log('Added');
    });
  }
})
