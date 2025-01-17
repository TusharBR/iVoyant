
import "../styles/navbar.css"

interface styling
{
  color:string,
  backgroundColor:string
  padding:string
  border:string
} 
  type Props= {
      checkfunc:()=>void;
      darkstyle:styling
      beforeclk:boolean

    }
const Navbar=({checkfunc,darkstyle,beforeclk}:Props)=> {

  
  return (
   
        <nav style={darkstyle}><ol><li>Logo</li>
        <li>Home</li>
        <li>About</li>
        <li className="cb"><input className="mycheckbox" type="checkbox" onClick={checkfunc}  checked={beforeclk}/> : {beforeclk===false?"Dark mode":"Light Mode"}</li>
        </ol></nav>

  )
}

export default Navbar