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
      restrict: 'E',
      link: function preLink(scope, element, attrs) {
        console.log('link function called');
	console.log(element);
	console.log(treeEnv1.getCanvas());
    	element.html(treeEnv1.getCanvas());
	element.bind('mousemove', function(e){
//	treeEnv1.render();
	console.log('mousemove');	
});
      }
    };
  }]);
