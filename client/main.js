import angular from 'angular';
import angularMeteor from 'angular-meteor';
import flashMessages from 'flash-messages';
import navbar from '../imports/components/navbar/navbar';
import homeViewController from '../imports/components/layouts/homepage/home';
import loginViewController from '../imports/components/layouts/login/login';
import registerViewController from '../imports/components/layouts/register/register';

angular.module('routing-app',[
    angularMeteor,navbar.name,'ui.router','accounts.ui'
  ]);

angular.module('routing-app').config(['$urlRouterProvider','$stateProvider','$locationProvider', function($urlRouterProvider,$stateProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider.state('/',{
    url:'/',
    templateUrl:'imports/components/layouts/homepage/home.html',
    controller:homeViewController
  }).state('/login',{
    url:'/login',
    templateUrl:'imports/components/layouts/login/login.html',
    controller:loginViewController
  }).state('/register',{
    url:'/register',
    templateUrl:'imports/components/layouts/register/register.html',
    controller:registerViewController
  });
}]);
FlashMessages.configure({
    autoHide: true,
    hideDelay: 5000,
    autoScroll: true
  });
