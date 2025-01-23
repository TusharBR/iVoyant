import "./styles/navbar.css"
import { formdata } from "./Maincontainer"
import { useContext } from "react"
interface toggleinterface
{
  mytogglefunc:()=>void
}
    const darkstyle=({color:"black",backgroundColor:"grey",padding:"5px",border:"2px solid white"})   
const Navbar=({mytogglefunc}:toggleinterface)=> {
  const beforesmt = useContext(formdata)
  return (
        <nav style={darkstyle}><ol><li>Logo</li>
        <li>Home</li>
        <li>About</li>
       <li>Contact us</li>
      <li > <button style={{padding:0,margin:0,fontSize:"x-large",cursor:"default"}} disabled={beforesmt.length>0?false:true} onClick={mytogglefunc}>&#128276;<sup > {beforesmt.length}</sup></button></li>
        </ol></nav>
  )
}
export default Navbar