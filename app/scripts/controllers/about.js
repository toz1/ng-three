'use strict';

/**
 * @ngdoc function
 * @name test3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the test3App
 */
angular.module('test3App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
