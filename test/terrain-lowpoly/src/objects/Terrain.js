import THREE from 'three'
import secretAlphaVertexShader from '../shaders/wireframe/VertexShader.vert'
import secretAlphaFragmentShader from '../shaders/wireframe/FragmentShader.frag'

class Terrain {

	/**
	* @constructor
	*/
	constructor(url) {
		this.time = 0;

		this.width = 1000;
		this.height = 1000;
		this.numSegments = 100;
		// plane
		this.geometry = new THREE.PlaneGeometry( this.height, this.width, this.numSegments, this.numSegments );

		this.materialAlpha = new THREE.MeshPhongMaterial({
			color: 0x000000,
			wireframe: false
			// shading: THREE.FlatShading
		});

		this.materialBeta = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			wireframe: true
		});

		// this.materialBeta = new THREE.ShaderMaterial({
		// 	wireframe: true,
		// 	side: THREE.DoubleSide,
		// 	uniforms: {
		// 		time: { type: "f", value: 1.0 },
		// 		progress: { type: "f", value: 1.0 },
		// 		resolution: { type: "v2", value: new THREE.Vector2() },
		// 		fog_color: { type: 'v3', value: new THREE.Vector3(1, 1, 1) },
		// 		fog_density: { type: 'f', value: '0.0015' }
		// 	},
		// 	vertexShader: secretAlphaVertexShader,
		// 	fragmentShader: secretAlphaFragmentShader
		// });



		// var texture = THREE.ImageUtils.loadTexture( 'images/test-lignes-map-01.jpg' );

		// this.materialBeta = new THREE.MeshLambertMaterial({
		// 	color: 0xffffff,
		// 	map: texture
		// });

		this.mesh = THREE.SceneUtils.createMultiMaterialObject( this.geometry, [

			this.materialAlpha,
			this.materialBeta

		]);

		// this.mesh = new THREE.Mesh( this.geometry, this.materialBeta );

		// this.material = new THREE.ShaderMaterial({
		// 	side: THREE.DoubleSide,
		// 	uniforms: {
		// 		time: { type: "f", value: 1.0 },
		// 		resolution: { type: "v2", value: new THREE.Vector2() }
		// 	},
		// 	vertexShader: limitVertexShader,
		// 	fragmentShader: limitFragmentShader
		// });

		//this.mesh = new THREE.Mesh( this.geometry, this.material );

		this.img = new Image();
		this.img.src = "images/heightmap2.png";

		this.img.onload = () => {

			this.getHeightData();

			var q = new THREE.Quaternion();
			q.setFromAxisAngle( new THREE.Vector3(-1,0,0), 90 * Math.PI / 180 );
			this.mesh.quaternion.multiplyQuaternions( q, this.mesh.quaternion );
			this.mesh.position.set(0,0,0);

		}

	}

	getTerrainPixelData() {
		var canvas = document.getElementById( 'img' );

		canvas.width = this.img.width;
		canvas.height = this.img.height;
		canvas.getContext('2d').drawImage(this.img, 0, 0, this.img.width, this.img.height);

		var data = canvas.getContext('2d').getImageData(0,0, this.img.height, this.img.width).data;
		var normPixels = []

		for (var i = 0, n = data.length; i < n; i += 4) {
			normPixels.push(((data[i] + data[i+1] + data[i+2]) / 3)/255);
		}

		return normPixels;
	}


	//return array with height data from img
	getHeightData() {

 		var terrain = this.getTerrainPixelData();
		console.log(this.geometry.vertices.length);
		console.log(terrain.length);
		var vertex
		for (var i = 0, l = this.geometry.vertices.length; i < l; i++)
		{
			var ns = this.numSegments + 1;
			vertex = this.geometry.vertices[i];
			var px = (i % ns)/(ns) * this.img.width;
			var py = Math.floor(i/ns)/(ns) * this.img.height;
			var idpx = Math.floor(this.img.width * py + px);
			var terrainValue = terrain[idpx];
			vertex.z = vertex.z + terrainValue * 200;
		}

		this.geometry.verticesNeedUpdate = true;
		this.geometry.computeFaceNormals();
		this.geometry.computeVertexNormals();
	}

		/**
		* @method
		* @name update
		* @description Triggered on every TweenMax tick
		*/
	update() {
		// this.time += 0.01;
		// this.materialBeta.uniforms.time.value = this.time;
		//
		// this.materialBeta.uniforms.progress.value = this.progress;
		// this.material.uniforms.time.value = this.time;

		//   this.mesh.rotation.x += this.rotationSpeed;
		//   this.mesh.rotation.y += this.rotationSpeed;
		//   this.mesh.rotation.z += this.rotationSpeed;

	}
}

export default Terrain
