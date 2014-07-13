'use strict';

/**
 * @ngdoc function
 * @name test3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test3App
 */

angular.module('test3App')
.controller('MainCtrl', ['$scope', 'treeEnv', function ($scope, env) {
    
    $scope.text = 'Hello World!';
  }]);
