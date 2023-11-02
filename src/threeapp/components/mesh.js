import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";


const createMesh = () => {

    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshBasicMaterial({ color: 'green'})
    const mesh = new Mesh(geometry, material)

    return mesh
}

export { createMesh }