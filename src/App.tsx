
import { useContext } from "react"
import {Cartcontext} from "../src/assets/context/Cart"
import './App.css'
import Leftside from './assets/compoenets/Leftside'
import Rightside from './assets/compoenets/Rightside'

function App() {
  const {before} = useContext(Cartcontext);
  const totalamt=before.reduce((a,b)=>{
    return a+Number(b.productPrice)
  },0)
  return (
    <>
      <div className='leftright'>
        <Leftside/>
        <Rightside/>
      </div>
      <footer style={{padding:"10px",textAlign:"center",backgroundColor:"lightblue",color:"red",fontSize:"3   0px"}}>Items added in cart are : {before.length} - Total amount : {totalamt.toFixed(2)}Rs</footer>
    </>
  )
}

export default App
