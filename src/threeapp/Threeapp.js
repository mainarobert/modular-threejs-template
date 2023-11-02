import { createCamera } from "./components/camera"
import { createScene } from "./components/scene"
import { createMesh } from "./components/mesh"
import { createRenderer } from "./systems/renderer"
import { Resizer } from "./systems/Resizer"


// These are modular scoped.
// They cannot be accessed outside this module
let camera
let scene
let renderer

class Threeapp {

    constructor(canvas){

        scene = createScene()
        camera = createCamera()
        renderer = createRenderer()

        // when we create renderer a <canvas> element is created and stored in renderer.domElement
        canvas.append(renderer.domElement)

        const cube = createMesh()
        scene.add(cube)

        const resizer = new Resizer(canvas, camera, renderer)
        resizer.onResize = () => {

            this.render()
        }
    }

    render() {

        renderer.render(scene, camera)
    }
}

export { Threeapp }