import angular from 'angular';
import angularMeteor from 'angular-meteor';
import templateRegister from './register.html';
import {check, Match} from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';


class registerViewController {
  constructor($scope,$state) {
    var user = angular.copy($scope.user);
    $scope.registerUser = function(){
      console.log($scope.user.password);
      Accounts.createUser($scope.user,function(err){
        if(!err){
          
        }
      })
    }
  }
}

registerViewController.$inject = ['$scope','$state'];
export default registerViewController;
