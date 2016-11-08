import THREE from 'three'
import MeshLine from '../utils/MeshLine.js'
import simulationVert from '../shaders/glitch/simulation_vs.vert'
import simulationFrag from '../shaders/glitch/simulation_fs.frag'
import AWDLoader from '../utils/AWDLoader'

class Secret {

	/**
	* @constructor
	*/
	constructor(){

	}

	load(scene) {

		let loader = new THREE.AWDLoader();

		var colors = [
			0xffffff,
			0xf4f1bb,
			0x9bc1bc,
			0x5ca4a9,
			0xe6ebe0,
			0xf0b67f,
			0xfe5f55,
			0xd6d1b1,
			0xc7efcf,
			0xeef5db,
			0x50514f,
			0xf25f5c,
			0xffe066,
			0x247ba0,
			0x70c1b3
		];

		// loader.materialFactory = this.createMaterial();
		this.material = new THREE.MeshLineMaterial({
			// map: THREE.ImageUtils.loadTexture( 'assets/stroke.png' ),
			useMap: false,
			color: new THREE.Color( colors[ 0 ] ),
			opacity: 1,
			resolution: this.resolution,
			sizeAttenuation: false,
			lineWidth: 10,
			near: scene.camera.near,
			far: scene.camera.far,
			depthWrite: false,
			depthTest: false,
			transparent: false
		});

		return new Promise(resolve => {
			loader.load( 'models/awd/planet.awd', function ( mesh ) {

				this.geometry = mesh.children[0].geometry;
				this.material = mesh.children[0].material;

				this.mesh = new THREE.Mesh(this.geometry, this.material);

				// this.mesh.material.color = new THREE.Color( 0xffffff );

				// this.mesh.position.set(0, 0, 0);
				// this.mesh.scale.set(0.2, 0.2, 0.2);

				// scene.add(this.mesh);
				this.collectPoints(mesh, scene);

				this.loaded = true;

				resolve('success');
			}.bind(this));
		});

		// this.resolution = new THREE.Vector2( window.innerWidth, window.innerHeight );
		//
		// this.geometry = new THREE.Geometry();
		// for( var j = 0; j < Math.PI; j += 2 * Math.PI / 100 ) {
		// 	var v = new THREE.Vector3( Math.cos( j ), Math.sin( j ), 0 );
		// 	this.geometry.vertices.push( v );
		// }
		//
		// this.line = new THREE.MeshLine();
		// this.line.setGeometry( this.geometry );
		//
		// this.material = new THREE.MeshLineMaterial({
		// 	// map: THREE.ImageUtils.loadTexture( 'assets/stroke.png' ),
		// 	// useMap: false,
		// 	color: new THREE.Color( colors[ 3 ] ),
		// 	opacity: .5,
		// 	resolution: this.resolution,
		// 	sizeAttenuation: false,
		// 	lineWidth: 10,
		// 	near: camera.near,
		// 	far: camera.far,
		// 	depthWrite: false,
		// 	depthTest: false,
		// 	transparent: true
		// });
		//
		// 	this.mesh = new THREE.Mesh(this.line.geometry, this.material);

		}

		collectPoints(source, scene) {
			// console.log( source, ">>>>");
			var g = source.children[ 0 ].geometry;
			// THREE.GeometryUtils.center( g );
			g.computeBoundingSphere();
			g.center();
			// var scaleMatrix = new THREE.Matrix4();
			// scaleMatrix.makeScale( 1000, 1000, 1000 );
			// g.applyMatrix( scaleMatrix );

			var o = new THREE.Mesh( g, new THREE.MeshNormalMaterial() );
			// scene.add( o );

			var raycaster = new THREE.Raycaster();

			var points = [];

			var y = -200;
			var a = 0;
			var r = 1000;
			var origin = new THREE.Vector3();
			var direction = new THREE.Vector3();
			for( var j = 0; j < 6000; j++ ) {
				a += .1;
				y += .075;
				origin.set( r * Math.cos( a ), y, r * Math.sin( a ) );
				direction.set( -origin.x, 0, -origin.z );
				direction = direction.normalize();
				raycaster.set( origin, direction );

				var i = raycaster.intersectObject( o, true );
				if( i.length ) {
					points.push( i[ 0 ].point.x, i[ 0 ].point.y, i[ 0 ].point.z );
				}
			}

			// console.log(points);

			var l = new THREE.MeshLine();
			l.setGeometry( points, function( p ) { return p } );
			console.log(this.material);
			this.mesh = new THREE.Mesh( l.geometry, this.material );
			console.log(this.mesh);

			scene.add(this.mesh);

			var bbox = new THREE.BoundingBoxHelper( this.mesh, 0xffffff );
			bbox.update();
			scene.add( bbox );

		}

		getRandomData( width, height, size ){

			var len = width * height * 3;
			var data = new Float32Array( len );
			while( len-- )data[len] = ( Math.random() * 2 - 1 ) * size ;
			return data;
		}

		/**
		* @method
		* @name update
		* @description Triggered on every TweenMax tick
		*/
		update() {
			if(this.loaded) {

				this.mesh.position.z += 500;
				this.mesh.position.y += 300;
			}

			// this.mesh.rotation.y += this.rotationSpeed;
			// this.mesh.rotation.z += this.rotationSpeed;

		}

	}

	export default Secret
