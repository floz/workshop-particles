precision highp float;

uniform vec3 color;

varying vec3 vNormal;

const vec3 LIGHT = vec3(1.0, .8, 1.6);

float diffuse(vec3 N, vec3 L) {
	return max(dot(N, normalize(L)), 0.0);
}

vec3 diffuse(vec3 N, vec3 L, vec3 C) {
	return diffuse(N, L) * C;
}

void main() {

	float d = diffuse(vNormal, LIGHT);
	d = mix(d, 1.0, .5);
	vec3 colorLight = color * d;
	gl_FragColor = vec4( colorLight, 1.0 );

}
