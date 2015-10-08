 var scene = new THREE.Scene();
 var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

 var renderer = new THREE.WebGLRenderer();
 renderer.setSize( window.innerWidth, window.innerHeight );
 document.body.appendChild( renderer.domElement );

 var geometry = new THREE.BoxGeometry(1,1,1);
 var material = new THREE.MeshPhongMaterial();
 var cube = new THREE.Mesh( geometry, material );
 scene.add( cube );

 camera.position.z = 5;

var light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 25, 25, 25 );
scene.add( light );

var amblight = new THREE.AmbientLight( 0x400000 ); // soft white light
scene.add( amblight );

var clock = new THREE.Clock();
clock.start();
function render() {

   cube.rotation.x += 0.01;
   cube.rotation.y += 0.01;
   cube.position.y = Math.sin(3*clock.getElapsedTime());
   requestAnimationFrame( render );
   renderer.render( scene, camera );
}
render();
