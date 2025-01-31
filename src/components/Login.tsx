import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

import "../styles/Login.css"

interface props
{
    checking:(pass:boolean)=>void
}

const Login= ({checking}:props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [Authenticated, setAuthenticated] = useState<boolean>(false);

 
  useEffect(() => {
    if(password===username && username!=="") {
        setAuthenticated(true);
        checking(true)
      } else {
        console.log("Invalid credentials! Try again.");
      }
  })


  return (
    <div >
      <header className="about-header">
        <h1>Welcome to Ivoyant College</h1>
        <p>Empowering students with excellence.</p>
      </header>

      <section className="home-section">
        <img style={{height:"850px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Emmanuel_College_Front_Court%2C_Cambridge%2C_UK_-_Diliff.jpg" alt="College Campus" className="home-image" />
      </section>
        <div className="logincontainer">
        <div  >
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <Link to="/home"><button  disabled={!Authenticated} type="submit">Login</button></Link>
 
        </div>
    </div>
  );
};

export default Login;
