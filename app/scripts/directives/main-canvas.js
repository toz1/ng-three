'use strict';

/**
 * @ngdoc directive
 * @name test3App.directive:mainCanvas
 * @description
 * # mainCanvas
 */
angular.module('test3App')
  .directive('mainCanvas',function (treeEnv) {
    return {
      restrict: 'E',
      link: function preLink(scope, element) {
    	element.html(treeEnv.getCanvas());
      /*var engine = pEng.ParticleEngine();

  engine.setValues(
  {
    positionStyle  : pEng.Type.SPHERE,
    positionBase   : new THREE.Vector3( 0, 50, 0 ),
    positionRadius : 2,

    velocityStyle : pEng.Type.SPHERE,
    speedBase     : 40,
    speedSpread   : 8,

    particleTexture : THREE.ImageUtils.loadTexture( 'images/smokeparticle.png' ),

    sizeTween    : new pEng.Tween( [0, 0.1], [1, 150] ),
    opacityTween : new pEng.Tween( [0.7, 1], [1, 0] ),
    colorBase    : new THREE.Vector3(0.02, 1, 0.4),
    blendStyle   : THREE.AdditiveBlending,

    particlesPerSecond : 60,
    particleDeathAge   : 1.5,
    emitterDeathAge    : 60
  } );
  engine.initialize(tEnv.scene);*/
//	element.bind('mousemove', function(e){
//	treeEnv1.render();
	//console.log(e.clientX);
//});
      }
    };
  });
