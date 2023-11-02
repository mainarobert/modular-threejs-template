
const setSize = (canvas, camera, renderer) => {

    // Set the camera's aspect ratio to match the canvas proportions
    camera.aspect = canvas.clientWidth / canvas.clientHeight

    // update the camera frustum
    camera.updateProjectionMatrix()

    // update the size of the renderer and the canvas
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    // set the pixel ratio for mobile devices
    renderer.setPixelRatio(window.devicePixelRatio)
}


class Resizer {

    constructor(canvas, camera, renderer) {

    setSize(canvas, camera, renderer)
    
    window.addEventListener('resize', () => {

        // set size again if resize occurs
        setSize(canvas, camera, renderer)

        // perform any custom actions
        // This enables us to perform some custom behavior whenever a resize happens
        this.onResize()
    })
    }

    //empty method that we can customize from outside the Resizer class.
    onResize(){}
}

export { Resizer }