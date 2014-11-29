'use strict';

/**
 * @ngdoc function
 * @name test3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test3App
 */

angular.module('test3App')
.controller('MainCtrl', function ($scope) {
    console.log('hello');
    $scope.text = 'Hello World!';
  });
