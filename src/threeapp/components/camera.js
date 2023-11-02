import { PerspectiveCamera } from "three";

const createCamera = () => {

    const camera = new PerspectiveCamera(45, 1, 1, 1000)
    camera.position.set(0, 0, 5)

    return camera
}

export { createCamera }