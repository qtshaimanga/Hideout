const THREE = require('three');

class ParticleSystem {

	/**
	* @constructor
	*/
	constructor() {

		this.particleCount = 700;
		this.clock = new THREE.Clock(true);
		this.particles = new THREE.Geometry();

		for (var p = 0; p < this.particleCount; p++) {

			// This will create all the vertices in a range of -200 to 200 in all directions
			var x = Math.random() * 4000;
			var y = Math.random() * 4000;
			var z = Math.random() * 4000;

			// Create the vertex
			var particle = new THREE.Vector3(x, y, z);

			// Add the vertex to the geometry
			this.particles.vertices.push(particle);
		}

		this.particleMaterial = new THREE.PointsMaterial({
			color: 0x0000FF,
			size: 3,
			fog: true,
			// map: THREE.TextureLoader("/static/textures/particle_1.png"),
			// blending: THREE.AdditiveBlending,
			transparent: true
		});

		this.mesh = new THREE.Points(this.particles, this.particleMaterial);
	}

	/**
	* @method
	* @name update
	* @description Triggered on every TweenMax tick
	*/
	update() {
		this.deltaTime = this.clock.getDelta();

		var verts = this.mesh.geometry.vertices;
		for(var i = 0; i < verts.length; i++) {
			var vert = verts[i];
			if (vert.y < -200) {
				vert.y = Math.random() * 400 - 200;
			}
			vert.y = vert.y - (10 * this.deltaTime);
			// vert.y = sin(vert.y - (10 * this.deltaTime));
		}

		this.mesh.geometry.verticesNeedUpdate = true;

	}

}

export default ParticleSystem
