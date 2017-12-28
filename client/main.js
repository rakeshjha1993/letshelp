import angular from 'angular';
import angularMeteor from 'angular-meteor';
import templateHome from '../imports/components/layouts/home.html';
import templateIndex from '../imports/components/layouts/homepage/index.html';
import templateLogin from '../imports/components/login/login.html';
import navbar from '../imports/components/navbar/navbar';

class homeViewController {
  constructor($scope) {
    $scope.PageTitle = "Home"
  }
}
class indexViewController {
  constructor($scope,$window) {
    let windowheight;
    $scope.scrollResize = function(){
      windowheight = $window.innerHeight
    },
    $scope.bannerInner = {
      'height' : parseInt($window.innerHeight) - 100,
    },
    $scope.bannerImage = {
      location: '/banner2.jpg',
      alternateText: 'homepage Banner'
    }
  }
}
class loginViewController{
  constructor($scope){

  }
}
console.log(navbar);
angular.module(
  'routing-app',[
    angularMeteor,navbar.name,'ui.router','accounts.ui'
  ]);
angular.module('routing-app').config(['$urlRouterProvider','$stateProvider','$locationProvider', function($urlRouterProvider,$stateProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider.state('home',{
    url:'/home',
    templateUrl:'imports/components/layouts/home.html',
    controller: homeViewController
  }).state('/',{
    url:'/',
    templateUrl:'imports/components/layouts/homepage/index.html',
    controller:indexViewController
  }).state('/login',{
    url:'/login',
    templateUrl:'imports/components/login/login.html',
    controller:loginViewController
  });
}]);
