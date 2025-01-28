
import { useContext } from "react"
import {Cartcontext} from "../src/assets/context/Cart"
import './App.css'
import Leftside from './assets/compoenets/Leftside'
import Rightside from './assets/compoenets/Rightside'

function App() {
  const {before} = useContext(Cartcontext);

  return (
    <>
      <div className='leftright'>
        <Leftside/>
        <Rightside/>
      </div>
      <footer style={{padding:"10px",textAlign:"center",backgroundColor:"lightblue",color:"red"}}>Items added in cart are : {before.length}</footer>
    </>
  )
}

export default App
