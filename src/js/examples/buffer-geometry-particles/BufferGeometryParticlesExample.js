import vs from "./shaders/particles.vs"
import fs from "./shaders/particles.fs"

export default class BufferGeometryParticlesExample extends THREE.Group {

	constructor() {
		super()
		
		this.countParticles = 1000

		this.createGeometry()
		this.createMaterial()

		this.particles = new THREE.Points( this.geometry, this.material )
		this.add( this.particles )
	}

	createGeometry() {
		let i3 = 0

		const positions = new Float32Array( this.countParticles * 3 )
		const scales = new Float32Array( this.countParticles )
		for( let i = 0; i < this.countParticles; i++ ) {
			positions[ i3 + 0 ] = Math.random() * 2000 - 1000
			positions[ i3 + 1 ] = Math.random() * 2000 - 1000
			positions[ i3 + 2 ] = Math.random() * 2000 - 1000

			scales[ i ] = Math.random() * 3.

			i3 += 3
		}
		
		this.geometry = new THREE.BufferGeometry()		
		this.geometry.addAttribute( "position", new THREE.BufferAttribute( positions, 3 ) )
		this.geometry.addAttribute( "scale", new THREE.BufferAttribute( scales, 1 ) )
	}

	createMaterial() {
		this.uniforms = {
			sizeBase: { type: "f", value: 10 }
		}

		this.material = new THREE.RawShaderMaterial( {
			uniforms: this.uniforms,
			vertexShader: vs,
			fragmentShader: fs,
			transparent: true,
			depthTest: false,
			depthWrite: false
		} )
	}

}
