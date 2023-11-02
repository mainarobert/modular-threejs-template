import { Scene, Color } from "three";


const createScene = () => {

    const scene = new Scene()
    scene.background = new Color(0x000000)

    return scene
}

export { createScene }