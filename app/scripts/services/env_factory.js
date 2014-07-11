'use strict';

/**
 * @ngdoc service
 * @name test3App.myNewFactory
 * @description
 * # myNewFactory
 * Factory in the test3App.
 */
angular.module('test3App')
  .factory('treeEnv', function () {
    // Service logic
    // ...

    var meaningOfLife = window.innerWidth;

    // Public API here
    return {
      init: function () {
        return meaningOfLife;
      }
    };
  });
