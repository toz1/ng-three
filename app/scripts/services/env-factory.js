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
    renderer.setClearColor(0xdddddd);

    camera.position.set(0, 0, -1000);
    console.log(threeEnv.scene.position);
    camera.lookAt(threeEnv.scene.position);


// create the particle variables
    var particleCount = 4,
      pGeometry = new THREE.Geometry(),
      pMaterial = new THREE.PointCloudMaterial({
        color: 0xfffffa,
        size: 2000,
        map: THREE.ImageUtils.loadTexture(
          'images/particle2.png'
        ),
        blending: THREE.AdditiveBlending,
        transparent: true
      });

// now create the individual particles
    for (var p = 0; p < particleCount; p++) {


       var geom = new THREE.Vector3(-2000, 1000, 2000);



      // add it to the geometry
      pGeometry.vertices.push(geom);
    }

// create the particle system
    var ptCloud = new THREE.PointCloud(
      pGeometry,
      pMaterial);

      ptCloud.position.set(0, 0, 2000);
      console.log(ptCloud);

      threeEnv.scene.add(ptCloud);



    console.log(threeEnv.scene);
    threeEnv.render = function () {
      requestAnimationFrame(threeEnv.render);
      //ptCloud.rotation.y += 0.01;
      ptCloud.dynamic = true;
      //ptCloud.geometry.vertices[0].x += 1;
      ptCloud.geometry.verticesNeedUpdate = true;
      renderer.render(threeEnv.scene, camera);

    };
    threeEnv.getCanvas = function () {
      return renderer.domElement;
    };

    threeEnv.getCanvas().addEventListener('mousemove', function(e){
     // ptCloud.geometry.vertices[0].x = (-e.clientX+(window.innerWidth / 2))*10;
      // ptCloud.geometry.vertices[0].y = (-e.clientY+(window.innerHeight / 2))*10;

       ptCloud.geometry.vertices[0].x = 0;
       ptCloud.geometry.vertices[0].y = 0;

    //  console.log(e.clientX);
    });
    threeEnv.render();



    //animation

    init();
    animate();

    function init() {
      var tween1 = new TWEEN.Tween( { x: 0, y: 0 , z: 10} )
        .to( { x: 210 }, 400 )
        .easing( TWEEN.Easing.Elastic.InOut )
        .onUpdate( function () {

          ptCloud.geometry.vertices[1].x = this.x;
          ptCloud.geometry.vertices[1].y = this.y;

        } )
        .start().repeat(Infinity).yoyo(true);


      var tween2 = new TWEEN.Tween( { x: 0, y: 0 } )
        .to( { x: -210 }, 400 )
        .easing( TWEEN.Easing.Elastic.InOut )
        .onUpdate( function () {

          ptCloud.geometry.vertices[2].x = this.x;
          ptCloud.geometry.vertices[2].y = this.y;

        } )
        .start().repeat(Infinity).yoyo(true);

      var tweenFunction = function(){
      var tween3 = new TWEEN.Tween( { x: 0, y: 0 } )
        .to( { x: 1000,  y: 0}, 1000 )
        .easing( TWEEN.Easing.Elastic.InOut )
        .onUpdate( function () {

          ptCloud.geometry.vertices[3].x = this.x;
          ptCloud.geometry.vertices[3].y = this.y;

        })

        .start().repeat(10).yoyo(true).onComplete(function(){
          console.log('restart');
          tween3.start();});

    }();}

    function animate(time) {

      requestAnimationFrame( animate ); // js/RequestAnimationFrame.js needs to be included too.
      TWEEN.update(time);

    }


    return threeEnv;

  });
