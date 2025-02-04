import { Link } from "react-router-dom";
import "../styles/Navbar.css"
const Navbar= () => {
  return (
    <>
    <nav className="mynav">
     <li className="lefts">Welcome to western technology</li>
      <span>
      <Link to="/" className="option0">
        Student</Link>
        <Link to="/hod" className="option2">HOD</Link>
      </span>
      
     
    </nav>
    </>
  );
};

export default Navbar;
