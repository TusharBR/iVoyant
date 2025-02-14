
import "../../Nav.css"
const Nav = () => {
  return (
    <nav className="navbar1">
      <div className="navbar1-container">
        <div className="logo">
          <h1>Compo Edit</h1>
        </div>
        <ul className="navbar1-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
