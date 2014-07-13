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
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
    scene.add(camera);
    renderer.setClearColor(0xaa7000);
    console.log(renderer.getClearColor);

// create the particle variables
var particleCount = 1800,
    particles = new THREE.Geometry(),
    pMaterial = new THREE.ParticleBasicMaterial({
      color: 0xFFFFFF,
      size: 20
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

scene.add(particleSystem);

 /* 
var geometry = new THREE.CubeGeometry(1,1,1);
 var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
 var cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );

var geometry = new THREE.Geometry(); geometry.vertices.push( new THREE.Vector3( -10, 10, 0 ) ); geometry.vertices.push( new THREE.Vector3( -10, -10, 0 ) ); geometry.vertices.push( new THREE.Vector3( 10, -10, 0 ) ); geometry.faces.push( new THREE.Face3( 0, 1, 2 ) ); geometry.computeBoundingSphere();

 var material = new THREE.ParticleSystemMaterial( { color: 0x00ff00 } );
var particle = new THREE.ParticleSystem(geometry, material); 
 var particle = new THREE.Particle(new THREE.ParticleCanvasMaterial({
    
    color : 0xff7000,
    opacity : 1,
   
    program : function (context){
    context.beginPath();
    context.arc(0,0,1,0,Math.PI * 2, true);
    context.closePath();
    context.fill();
}}));    particle.position.x = 0;
    particle.position.y = 0;
    particle.position.z = 0;
    particle.scale.x = particle.scale.y = 10;
    scene.add(particle);
    camera.lookAt(particle);*/

    camera.position.z = 5;

    console.log(scene);    
threeEnv.render = function (){
requestAnimationFrame(threeEnv.render);
particleSystem.rotation.y += 0.01;
	renderer.render (scene, camera);

	console.log('rendering: '+ renderer);

};
    threeEnv.getCanvas = function () {
        return renderer.domElement;
      };
   threeEnv.render();
   console.log(threeEnv); 
    return threeEnv;     

	  });		
