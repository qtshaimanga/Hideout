precision highp float;

varying vec3 vNormal;
uniform float amplitude;

void main () {

	// gl_FragColor = vec4(vNormal * sin(amplitude), 1.0);
	gl_FragColor = vec4(vec3(0.5, 0.5, 0.5) * sin(amplitude) , 1.0);
}
