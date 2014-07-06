'use strict';

/**
 * @ngdoc function
 * @name test3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test3App
 */

angular.module('test3App')
.controller('MainCtrl', ['$scope', 'ThreeEnv0', function ($scope, ThreeEnv3) {
    
    $scope.text = 'Hello World!';
    $scope.three = ThreeEnv3.init();
  }]);
