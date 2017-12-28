import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './navbar.html'
import { Menus } from '../../api/menus.js';
class navbarController{
  constructor($scope){
    $scope.name = "Rakesh";
    $scope.helpers({
      menus(){
        return Menus.find({});
      }
    })
   $scope.logo = {
     location: '/logo.png',
     alternatetext: 'logo'
   }
  }
}

export default angular.module('navbar',[angularMeteor])
.component('navbar',
    {
      templateUrl: 'imports/components/navbar/navbar.html',
      controller: ['$scope',navbarController]
});
