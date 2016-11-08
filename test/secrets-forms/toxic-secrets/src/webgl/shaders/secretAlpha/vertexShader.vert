#pragma glslify: cnoise2 = require(glsl-noise/classic/2d);

uniform float u_time;
uniform float u_speed;
uniform float u_amp;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

void main() {

	vNormal = normal;

  float displacement = u_amp * cnoise2( vec2( position * 0.05 ) + u_time * u_speed );
  vec3 newPosition = position + normal * displacement;

  mvPosition = modelViewMatrix * vec4( position, 1.0 );
  vViewPosition = - mvPosition.xyz;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );

}
