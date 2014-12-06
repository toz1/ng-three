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

    var threeEnv = {};
    var THREE = window.THREE;
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    threeEnv.scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(70,window.innerWidth / window.innerHeight, 1, 5000);
    threeEnv.scene.add(camera);
    renderer.setClearColor(0xaaaaaaa);

    camera.position.set(0, 0, -1000);
    console.log(threeEnv.scene.position);
    camera.lookAt(threeEnv.scene.position);


// create the particle variables
    var particleCount = 10,
      particles = new THREE.Geometry(),
      pMaterial = new THREE.PointCloudMaterial({
        color: 0xffffff,
        size: 2500,
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

        particle = new THREE.Vector3(pX, pY, 4);



      // add it to the geometry
      particles.vertices.push(particle);
    }

// create the particle system
    var ptCloud = new THREE.PointCloud(
      particles,
      pMaterial);

      ptCloud.position.set(0, 0, 2000);
      console.log(ptCloud);

      threeEnv.scene.add(ptCloud);



    console.log(threeEnv.scene);
    threeEnv.render = function () {
      requestAnimationFrame(threeEnv.render);
      //ptCloud.rotation.y += 0.01;
      ptCloud.dynamic = true;
      ptCloud.geometry.vertices[0].x += 1;
      ptCloud.geometry.verticesNeedUpdate = true;
      renderer.render(threeEnv.scene, camera);

    };
    threeEnv.getCanvas = function () {
      return renderer.domElement;
    };

    threeEnv.getCanvas().addEventListener('mousemove', function(e){
      ptCloud.geometry.vertices[1].x = (-e.clientX+(window.innerWidth / 2))*10;
      ptCloud.geometry.vertices[1].y = (-e.clientY+(window.innerHeight / 2))*10;

      console.log(e.clientX);
    });
    threeEnv.render();
    console.log(threeEnv);
    return threeEnv;

  });
