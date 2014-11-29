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
    var threeEnv = {};
    var THREE = window.THREE;
    var renderer = new THREE.WebGLRenderer();	
    console.log('renderer declared');
    console.log(renderer);
    renderer.setSize(window.innerWidth, window.innerHeight);
    threeEnv.scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(70,window.innerWidth / window.innerHeight, 100, 1000);
    threeEnv.scene.add(camera);
    renderer.setClearColor(0xaaaaaaa);
    
  camera.position.set(0,500,500);
  camera.lookAt(threeEnv.scene.position);


// create the particle variables
var particleCount = 10,
    particles = new THREE.Geometry(),
    pMaterial = new THREE.ParticleBasicMaterial({
      color: 0xFF7700,
      size: 25,
	  map: THREE.ImageUtils.loadTexture(
    'images/particle.png'
  ),
  blending: THREE.AdditiveBlending,
  transparent: true
    });

// now create the individual particles
for (var p = 0; p < particleCount; p++) {

  // create a particle with random
  // position values, -250 -> 250
  var pX = Math.random() * 500 - 250,
      pY = Math.random() * 500 - 250,
      pZ = Math.random() * 500 - 250,
      particle = new THREE.Vector3(pX, pY, pZ);

  // add it to the geometry
  particles.vertices.push(particle);
}

// create the particle system
var particleSystem = new THREE.ParticleSystem(
    particles,
    pMaterial);

// add it to the scene

//threeEnv.scene.add(particleSystem);

// add particules 
setInterval(function(){
	var pX = Math.random() * 400 - 250,
      	pY = Math.random() * 400 - 250,
      	pZ = Math.random() * 400 - 250,
      	particle = new THREE.Vector3(pX, pY, pZ);

  // add it to the geometry
    particleSystem.dynamic = true;
  particleSystem.geometry.vertices.push(particle);
    particleSystem.geometry.verticesNeedUpdate = true;

  console.log('adding particle '+particles.vertices.length);
  },100);
//

        setTimeout(function(){threeEnv.scene.add(particleSystem);},3000);

    console.log(threeEnv.scene);    
threeEnv.render = function (){
    requestAnimationFrame(threeEnv.render);
particleSystem.rotation.y += 0.01;
particleSystem.dynamic = true;
  particleSystem.geometry.verticesNeedUpdate = true;
	renderer.render (threeEnv.scene, camera);

};
    threeEnv.getCanvas = function () {
        return renderer.domElement;
      };
   threeEnv.render();
   console.log(threeEnv); 
    return threeEnv;     

	  });		
