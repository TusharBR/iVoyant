import { Link } from "react-router-dom";
import "../styles/Navbar.css"
const Navigationbar= () => {
  return (
    <>
    <nav className="mynav">
     <li className="lefts" >Ivokart</li>
      <span>

      <Link to="/" className="option0">
        Logout</Link>
      </span>
      
     
    </nav>
    </>
  );
};

export default Navigationbar;