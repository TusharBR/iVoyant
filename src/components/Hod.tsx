import {  useState } from "react";
import {  useNavigate,Link} from "react-router-dom";
import "../styles/Login.css"
import { useSelector} from "react-redux";



const Hod= () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");


 const users=useSelector((state)=>state.users);
 const navg=useNavigate()

  const handleLogin = () => {
   

    // Check users array to handle navigation
    const foundUser = users.find(
      (user) => user.username === username && user.password === password && user.ishod==="true"
    );
    if (foundUser) {
      console.log("Navigating to /main");
      navg("/main");
    } else {
      alert("Invalid credentials in verifyy");
      setUsername("")
      setPassword("")
    }
  };

  return (
    <div>
      

     
      <div className="maincontainers" style={{border:"2px solid yellow" ,height:"88vh"}}>
      <div className="logincontainer">
        <h4 style={{margin:0}}>HOD Login</h4>
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

        <button style={{width:"20%",marginTop:"10px"}} onClick={()=>{handleLogin()}} disabled={!(username.trim()!=="" && password.trim()!=="")} >Login</button>
        <Link to="/createhod"><button  type="submit">Create</button></Link>
        </div>
      </div>
    </div>
     );
};

export default Hod;
