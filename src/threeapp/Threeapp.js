import { createCamera } from "./components/camera"
import { createScene } from "./components/scene"
import { createMesh } from "./components/mesh"
import { createRenderer } from "./systems/renderer"
import { Resizer } from "./systems/Resizer"
import { Loop } from "./systems/Loop"
import { createControls } from "./systems/controls"


// These are modular scoped.
// They cannot be accessed outside this module
let camera
let scene
let renderer
let loop

class Threeapp {

    constructor(canvas){

        scene = createScene()
        camera = createCamera()
        renderer = createRenderer()
        loop = new Loop(camera, scene, renderer)

        // when we create renderer a <canvas> element is created 
        // and stored in renderer.domElement
        canvas.append(renderer.domElement)

        const controls = createControls(camera, renderer.domElement)

        const cube = createMesh()

        loop.updatables.push(controls)

        scene.add(cube)

        const resizer = new Resizer(canvas, camera, renderer)

        // manual resizing of viewport replaced by loop animation
        // Now that the loop is running, whenever we resize 
        //the window a new frame will be produced on the next iteration of the loop
        //resizer.onResize = () => {
        //    this.render()
        //}
    }

    render() {
        // draws a single frame
        renderer.render(scene, camera)
    }

    start() {
        loop.start()
    }

    stop() {
        loop.stop()
    }
}

export { Threeapp }