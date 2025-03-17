import { Link } from "react-router-dom";
import "../styles/Navbar.css"
// import {   useSelector} from "react-redux";
// import { RootState } from "../Store"
// const cartdata=useSelector((state:RootState)=>state.Cartitems.cartitems);
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