angular.module('League')
.controller('AdminController',function($scope,$http){
  $scope.create = function() {
    $scope.debug = '';
    $http.get('/secure/newLeague').success(function(done) {
     $scope.debug = done;
    });
  }  
})
