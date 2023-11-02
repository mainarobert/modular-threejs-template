import { Threeapp } from './threeapp/Threeapp'


const main = () => {

  // reference div app element
  const canvas = document.querySelector('#app')

  // instance Threeapp class
  const threeapp = new Threeapp(canvas)

  // start animation loop
  threeapp.start()
}

main()