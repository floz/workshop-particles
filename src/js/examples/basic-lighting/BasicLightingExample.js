import vs from "./shaders/basicLighting.vs"
import fs from "./shaders/basicLighting.fs"

export default class BasicLightingExample extends THREE.Group {

	constructor() {
		super()

		const geo = new THREE.BoxBufferGeometry( 1000, 1000, 1000, 1, 1, 1 )
		const mat = new THREE.RawShaderMaterial( {
			uniforms: {
				color: { type: "c", value: new THREE.Color( 0xff00ff ) }
			},
			vertexShader: vs,
			fragmentShader: fs,
			transparent: false
		} )
		const mesh = new THREE.Mesh( geo, mat )
		mesh.rotation.set( Math.PI * .25, Math.PI * .25, Math.PI * .25 )
		this.add( mesh )
	}

}
