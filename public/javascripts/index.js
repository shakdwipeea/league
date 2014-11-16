angular.module('League',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl:'/templates/home.ejs',
    controller:'HomeController'
  })

  .state('add',{
    url:'/add',
    templateUrl:'/templates/new.ejs',
    controller:'AddController'
  })

  .state('admin',{
    url:'/admin',
    templateUrl:'/templates/admin.ejs',
    controller:'AdminController'
  })  

});

