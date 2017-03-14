$(document).ready(function () {
	// Drawing cubes
	drawCube();
	// Drawing lines
	drawLine();
});

function drawCube() {
	var scene = new THREE.Scene(),
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ),
		renderer = new THREE.WebGLRenderer();

	renderer.setSize( window.innerWidth, window.innerHeight );
	$(".cube-wrap").append( renderer.domElement );

	var geometry = new THREE.BoxGeometry( 1, 1, 1 ),
		material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } ),
		cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	camera.position.z = 5;

	var render = function () {
		requestAnimationFrame( render );

		cube.rotation.x += 0.1;
		cube.rotation.y += 0.1;

		renderer.render(scene, camera);
	};

	render();
}

function drawLine() {
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	$(".line-wrap").append(renderer.domElement);

	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
	camera.position.set(0, 0, 100);
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	var scene = new THREE.Scene();
	//create a blue LineBasicMaterial
	var material = new THREE.LineBasicMaterial({ color: 0x0000ff });

	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
	geometry.vertices.push(new THREE.Vector3(0, 10, 0));
	geometry.vertices.push(new THREE.Vector3(10, 0, 0));

	var line = new THREE.Line(geometry, material);

	scene.add(line);

	renderer.render(scene, camera);
}