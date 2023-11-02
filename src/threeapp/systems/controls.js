import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const createControls = (camera, canvas) => {

    const controls = new OrbitControls(camera, canvas)

    controls.enableDamping = true
    controls.autoRotate =true
    controls.autoRotateSpeed = 7

    controls.tick = () => controls.update()

    return controls
}

export { createControls }