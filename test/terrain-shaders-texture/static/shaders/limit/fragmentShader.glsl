precision highp float;

uniform float time;
//   uniform sampler2D texture;

varying vec2 vUV;
varying vec3 vPos;
varying vec3 vCameraPosition;
void main(void) {
	// float fog = 1.0 - exp(-0.1 * distance(vCameraPosition, vPos));
	// vec3 finalColor = mix(vPos.xyz, vec3(1.0), fog);
	// // vec3 textureColor = texture2D(texture, vUV).rgb;
	// // vec3 finalColor = mix(textureColor, vPos.xyz * sin(0.1 * time + 10.0 * vPos.x), 0.5);
	//
	// gl_FragColor = vec4(vUV.x, vUV.y, 0.0, 1.0);
	// gl_FragColor = vec4(finalColor, 1.0);
}
