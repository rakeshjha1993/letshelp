import angular from 'angular';
import angularMeteor from 'angular-meteor';
import templateLogin from './login.html';
import flashMessages from 'flash-messages';

class loginViewController {
  constructor($scope,$state) {
   $scope.logIn = function(user){
     var password = Accounts._hashPassword($scope.user.userPassword);
     Meteor.loginWithPassword($scope.userEmail,password,function(err){
       FlashMessages.sendSuccess('success');
       $state.go('/');
     });
   }

  }
}

loginViewController.$inject = ['$scope','$state'];
export default loginViewController;
