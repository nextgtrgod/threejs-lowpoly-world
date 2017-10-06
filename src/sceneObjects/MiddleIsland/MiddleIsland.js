import { Object3D, Geometry, Mesh } from 'three';

import Cube from '../../modules/Cube';
import Fan from '../fan';
import Fence from '../fence';
import Pine from '../pine';
import Windvane from './Windvane';

import { colors } from '../../modules/colors';
import { materials } from '../../modules/materials';


export default class MiddleIsland {
	constructor() {

		this.mesh = new Object3D();

		// big cube
		this.mesh.add(
			(new Cube(
				[400, 400, 400],
				{x: 0, y: 0, z: 0},
				colors.lightBrown,
				'middle-cube-basement')
			).mesh
		);

		// fans
		this.fans = [];


		{
			const fan = new Fan();
			fan.mesh.position.x += 200;
			fan.mesh.position.y += 100;
			fan.mesh.position.z -= 100;
			fan.mesh.rotation.z = (- Math.PI / 2)

			this.fans.push(fan);
		};

		{
			const fan = new Fan();

			fan.mesh.position.x += 200;
			fan.mesh.position.y -= 50;
			fan.mesh.position.z += 100;
			fan.mesh.rotation.z = (- Math.PI / 2)

			this.fans.push(fan);
		};

		this.fans.map(fan => {
			this.mesh.add(fan.mesh)
		});


		// fence perimeter
		let fenceGeometry = new Geometry();
		
		for (let i = 0; i < 11; i++) {
			const fence = new Fence();
			fence.mesh.position.x += (190 - i * fence.width) ;
			fence.mesh.position.y += 200;
			fence.mesh.position.z -= 190;
			
			fence.mesh.updateMatrix();
			fenceGeometry.merge(fence.mesh.geometry, fence.mesh.matrix);
		};

		for (let i = 0; i < 10; i++) {
			const fence = new Fence();
			fence.mesh.position.x += 190;
			fence.mesh.position.y += 200;
			fence.mesh.position.z += 185 - (i *fence.width);

			fence.mesh.rotation.y = - (Math.PI / 2);

			fence.mesh.updateMatrix();
			fenceGeometry.merge(fence.mesh.geometry, fence.mesh.matrix);
		};

		for (let i = 0; i < 4; i++) {
			const fence = new Fence();
			fence.mesh.position.x -= (190 - i * fence.width) ;
			fence.mesh.position.y += 200;
			fence.mesh.position.z += 190;
			
			fence.mesh.updateMatrix();
			fenceGeometry.merge(fence.mesh.geometry, fence.mesh.matrix);
		};

		for (let i = 0; i < 3; i++) {
			const fence = new Fence();
			fence.mesh.position.x += (80 + i * fence.width);
			fence.mesh.position.y += 200;
			fence.mesh.position.z += 185;

			fence.mesh.rotation.y = Math.PI;

			fence.mesh.updateMatrix();
			fenceGeometry.merge(fence.mesh.geometry, fence.mesh.matrix);
		};

		const fencePerimeter = new Mesh(fenceGeometry, materials.wood);
		fencePerimeter.name = 'fence-perimeter';
		fencePerimeter.castShadow = true;
		fencePerimeter.receiveShadow = true;


		// pine
		const pine = new Pine([1.2, 2, 1.2]).mesh;
		pine.position.set(-140, 200, 140);


		// windvane
		const windvane = new Windvane();
		windvane.mesh.position.set(110, 200, -80);

		this.windvaneFan = windvane.fan;

		// final
		this.mesh.add(
			fencePerimeter,
			pine,
			windvane.mesh
		);
		
	}
}