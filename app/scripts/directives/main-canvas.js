'use strict';

/**
 * @ngdoc directive
 * @name test3App.directive:mainCanvas
 * @description
 * # mainCanvas
 */
angular.module('test3App')
  .directive('mainCanvas', ['treeEnv',function (treeEnv) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the mainCanvas directive ---- NEXT STEP ----- git commit this and write the main-canvas directive (and treeEnv');
      }
    };
  }]);
