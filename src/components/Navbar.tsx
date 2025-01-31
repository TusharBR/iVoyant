import { Link } from "react-router-dom";
import "../styles/Navbar.css"
const Navbar= () => {
  return (
    <nav className="mynav" style={{textDecoration:"none"}}>
      <Link to="/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/library">Library</Link> | <Link to="/">Logout</Link>
    </nav>
  );
};

export default Navbar;
