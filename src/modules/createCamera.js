import { PerspectiveCamera } from 'three';


export default function createCamera() {

	let HEIGHT = window.innerHeight;
	let WIDTH = window.innerWidth;


	let aspectRatio = WIDTH / HEIGHT;
	const fieldOfView = 50;
	const nearPlane = 1;
	const farPlane = 10000;

	let camera = new PerspectiveCamera(
		fieldOfView,
		aspectRatio,
		nearPlane,
		farPlane
	);

	camera.position.x = 0;
	camera.position.y = 80;
	camera.position.z = 1200;

	return camera;
}