precision highp float;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

attribute vec3 position;
attribute vec3 normal;

varying vec3 vNormal;

void main() {
	vNormal = normal;

	vec3 pos = position;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
}
