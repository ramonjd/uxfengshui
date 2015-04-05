angular.module('webFengShui', ['famous.angular'])
    .controller('WebFengShuiCtrl', ['$scope', '$famous', '$timeout', function ($scope, $famous) {

        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Easing = $famous['famous/transitions/Easing'];

        $scope.box = {
            translate: new Transitionable([0, 200, 0]),
            opacity: new Transitionable(0)
        };

        $scope.head = {
            translate: new Transitionable([0, 150, 0]),
            opacity: new Transitionable(0)
        };

        $scope.box.translate.set([0, 90, 0], {duration: 700, curve: 'easeInOut'});
        $scope.box.opacity.set(1, {duration: 1000, curve: 'easeInOut'});

        $scope.head.translate.set([0, 0, 0], {duration: 500, curve: 'easeInOut'});
        $scope.head.opacity.set(1, {duration: 1000, curve: 'easeInOut'});




    }])
    .directive('shadeBackground', ['$timeout', function ($timeout) {
        return {
            restrict : 'E',
            link : function (scope, element) {
                $timeout(function () {
                    element.addClass('fade-out');
                }, 250);
            }
        }
    }]);