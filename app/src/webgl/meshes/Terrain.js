import * as THREE from 'three'

class Terrain {

	/**
	* @constructor
	*/
	constructor(heightmap) {

		this.width = 4000;
		this.height = 4000;
		this.numSegments = 25;

		this.geometry = new THREE.PlaneGeometry( this.height, this.width, this.numSegments, this.numSegments );

		this.materialAlpha = new THREE.MeshPhongMaterial({
			color: 0x212b47,
			wireframe: false
			// shading: THREE.FlatShading
		});

		this.materialBeta = new THREE.MeshPhongMaterial({
			color: 0xfff6e3,
			wireframe: true,
			transparent: true,
			opacity: 0.2
		});

		this.mesh = THREE.SceneUtils.createMultiMaterialObject( this.geometry, [
			this.materialAlpha,
			this.materialBeta
		]);

		this.img = new Image();
		this.img.src = heightmap;

		this.img.onload = () => {
			this.getHeightData();
		}

		var q = new THREE.Quaternion();
		q.setFromAxisAngle( new THREE.Vector3(-1,0,0), 90 * Math.PI / 180 );
		this.mesh.quaternion.multiplyQuaternions( q, this.mesh.quaternion );

	}

	/**
	*
	*/
	getTerrainPixelData() {
		var canvas = document.createElement("canvas");
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

	/**
	*
	*/
	getHeightData() {

		var vertices = this.geometry.vertices;
		var terrain = this.getTerrainPixelData();

		for(let i=0; i<vertices.length; i++){
			var terrainId = Math.round(this.map(i, 0, vertices.length - 1, 0, terrain.length - 1))
			var vertex = vertices[i];
			var terrainValue = terrain[terrainId]
			vertex.z = vertex.z + terrainValue * 350;
		}

		this.geometry.verticesNeedUpdate = true;
		this.geometry.computeFaceNormals();
		this.geometry.computeVertexNormals();
	}

	map( num, min1, max1, min2, max2 ) {

		let num1 = ( num - min1 ) / ( max1 - min1 )
		let num2 = ( num1 * ( max2 - min2 ) ) + min2

		return num2;

	}

	/**
	* @method
	* @name update
	* @description Triggered on every TweenMax tick
	*/
	update() {

	}
}

export default Terrain
