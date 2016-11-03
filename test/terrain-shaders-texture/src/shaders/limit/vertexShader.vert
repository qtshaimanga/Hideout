//uniform mat4 modelMatrix;
	  //uniform mat4 modelViewMatrix;
	  //uniform mat4 projectionMatrix;
	  //uniform mat4 viewMatrix;
	  //uniform mat3 normalMatrix;
	  //uniform vec3 cameraPosition;

	  //attribute vec3 position;
	  //attribute vec3 normal;
	  //attribute vec2 uv;

varying vec2 vUV;
varying vec3 vPos;
varying vec3 vCameraPosition;
void main(void) {

	vUV = uv;
			  vPos = position;
			  vCameraPosition = cameraPosition;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
