precision highp float;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float time;
uniform float sizeBase;

attribute vec3 position;
attribute float scale;

void main() {

	vec3 pos = position;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );

	gl_PointSize = sizeBase * scale;

}
