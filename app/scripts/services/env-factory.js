'use strict';

/**
 * @ngdoc service
 * @name test3App.envFactory
 * @description
 * # envFactory
 * Factory in the test3App.
 */
angular.module('test3App')
  .factory('treeEnv', function () {
    // Service logic
    // ...
    var renderer = new THREE.CanvasRenderer();	
    console.log('renderer declared');
    console.log(renderer);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Public API here
    return {
      init: function () {
        return renderer;
      }
    };
	  });		
