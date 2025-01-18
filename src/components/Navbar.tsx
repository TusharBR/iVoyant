
import "../styles/navbar.css"
import { styling } from '../types/styling'
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
        <li className="cb"><input className="mycheckbox" type="checkbox" onClick={checkfunc} readOnly checked={beforeclk}/> : {beforeclk===false?"Dark mode":"Light Mode"}</li>
        </ol></nav>

  )
}

export default Navbar