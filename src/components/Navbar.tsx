import { Link } from "react-router-dom";
import "../styles/Navbar.css"
const Navbar= () => {
  return (
    <>
    <nav className="mynav">
     <li className="lefts">Ivokart</li>
      <span>
      <Link to="/" className="option0">
        Customer</Link>
        <Link to="/admin" className="option2">Admin</Link>
      </span>
      
     
    </nav>
    </>
  );
};

export default Navbar;