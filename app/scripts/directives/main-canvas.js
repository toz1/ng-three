'use strict';

/**
 * @ngdoc directive
 * @name test3App.directive:mainCanvas
 * @description
 * # mainCanvas
 */
angular.module('test3App')
  .directive('mainCanvas',['treeEnv', function (treeEnv1) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function preLink(scope, element) {
        element = treeEnv1.domElement;
      }
    };
  }]);
