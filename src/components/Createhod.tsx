import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import {createuser} from "../allowedusers"

import "../styles/Create.css"
import { useDispatch } from "react-redux";



const Createhod= () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setname] = useState<string>("");

 const disp=useDispatch()
  useEffect(() => {
    if(password===username && username.trim()!=="") {
      console.log("valid credentials! Try again.");
      } else {
        console.log("Invalid credentials! Try again.");
      }
  })


  return (
    <div>
      

     
      <div className="maincontainers" style={{border:"2px solid yellow" ,height:"88vh"}}>
      <div className="logincontainer">
        <h4 style={{margin:0}}>Create Student Login</h4>
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
          className="pass"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <div>
          <label>Name:</label>
          <input 
         
            type="text" 
            value={name} 
            onChange={(e) => setname(e.target.value)} 
            required 
          />
        </div>

        

        
        <Link to="/hod"><button onClick={()=>{disp(createuser({username,password,name,ishod:"true"}))}} disabled={!(username.trim()!=="" && password.trim()!=="")} type="submit">Create HOD</button></Link>
 
        </div>
      </div>
    </div>
     );
};

export default Createhod;
