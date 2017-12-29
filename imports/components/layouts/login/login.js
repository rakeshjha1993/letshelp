import angular from 'angular';
import angularMeteor from 'angular-meteor';
import templateLogin from './login.html';


class loginViewController {
  constructor($scope) {
    let userName = $scope.userEmail;
    let password = $scope.userPassword;
    Meteor.loginWithPassword(userName,password);
  }
}

loginViewController.$inject = ['$scope'];
export default loginViewController;
