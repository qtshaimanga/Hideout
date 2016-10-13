import THREE from 'three'

class SecretAlpha {

    /**
     * @constructor
     */
    constructor() {
		this.time = 0;

        this.radius = 100;
		this.detail = 1;
        this.rotationSpeed = .01;

        this.geometry = new THREE.OctahedronGeometry(this.radius, this.detail);
        this.material = new THREE.ShaderMaterial({
			uniforms: {
				time: { type: "f", value: 1.0 },
				resolution: { type: "v2", value: new THREE.Vector2() }
			},
			vertexShader: document.getElementById( 'vertexShader' ).textContent,
			fragmentShader: document.getElementById( 'fragmentShader' ).textContent
		});

        this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(0,0,0);

		this.randomize();
    }

	randomize() {
		var vertex, normals;
		for (var i = 0, l = this.geometry.vertices.length; i < l; i++)
		{
			vertex = this.geometry.vertices[i];
			normals = this.geometry;
			console.log(normals);
			vertex.z = vertex.z + Math.random() * 100;
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

		this.material.uniforms.time.value += 0.005;

        // this.mesh.rotation.x += this.rotationSpeed;
        // this.mesh.rotation.y += this.rotationSpeed;
        // this.mesh.rotation.z += this.rotationSpeed;

    }

}

export default SecretAlpha
