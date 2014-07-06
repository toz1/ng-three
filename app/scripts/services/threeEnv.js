'use strict';

angular.module('test3App').factory('ThreeEnv0', function () {


  function init() {

    var width = window.innerWidth;
    //var height = window.innerHeight;
   // var renderer = new THREE.WebGLRenderer({ antialias: true });
    //renderer.setSize(width, height);
	return width;

  }

  var display = {
    init: init
  };

  return display;

});
