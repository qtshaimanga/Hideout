precision highp float;

varying vec3 vNormal;
uniform float amplitude;

void main () {

	gl_FragColor = vec4(vNormal * sin(amplitude), 1.0);
}
