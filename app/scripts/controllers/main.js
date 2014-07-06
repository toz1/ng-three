'use strict';

/**
 * @ngdoc function
 * @name test3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test3App
 */

app.controller('MainCtrl', function ($scope, ThreeEnv) {
    
    $scope.text = 'Hello World!';
    $scope.three = ThreeEnv.init(1);
  });
