import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './home.html'

class homeViewController {
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
homeViewController.$inject = ['$scope', '$window'];
export default homeViewController;
