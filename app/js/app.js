angular.module('uxFengShui',['famous.angular'])
  .controller('UxFengShuiCtrl', ['$scope', '$famous', function($scope, $famous) {

    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Easing = $famous['famous/transitions/Easing'];

    $scope.box = {
        translate: new Transitionable([0, 150, 0]),
        opacity: new Transitionable(0)
    };

    $scope.head = {
        translate: new Transitionable([0, 100, 0]),
        opacity: new Transitionable(0)
    };

    $scope.box.translate.set([0, 90, 0], {duration: 400, curve: 'easeInOut'});
    $scope.box.opacity.set(1, {duration: 1000, curve: 'easeInOut'});

    $scope.head.translate.set([0, 0, 0], {duration: 300, curve: 'easeInOut'});
    $scope.head.opacity.set(1, {duration: 1000, curve: 'easeInOut'});

}]);