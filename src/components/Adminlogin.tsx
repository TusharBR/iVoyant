import {  useState } from "react";
import "../styles/Login.css"
import { useDispatch, useSelector } from "react-redux";
import {createuser} from "../slices/loginpage"
import { useNavigate } from "react-router-dom";
import Logininput from "./Logininput";

interface statetype
{
  credentials:{
    users: {
      find(arg0: (user: { username: string; password: string; isadmin: string; }) => boolean): unknown;username: string; password: string; isadmin: string;
};username: string; password: string; isadmin: string;
}
  
}


const Login= () => {
   const dispatch= useDispatch()
   const [oit,nit]=useState({ username: "",name:"", adminid: "",password:"",isadmin:"true"});
   const [,cnit]=useState({ username: "",password:"" });
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>)   => {
    nit({ ...oit, [e.target.name]: e.target.value });
  };
   function createcustomer()
   {
    dispatch(createuser(oit))
    nit({ username: "",name:"", adminid: "",password:"" ,isadmin:"true"})
   }
   const users=useSelector((state:statetype)=>state.credentials.users);
 const navg=useNavigate()

  const handleLogin = (uname:string,pword:string) => {
   
    const foundUser = users.find(
      (user: { username: string; password: string; isadmin: string; }) => user.username === uname && user.password === pword && user.isadmin==="true"
    );
    if (foundUser) {
      
      cnit({username:"",password:""})
      navg("/Adminmp");
    } else {
      alert("Invalid credentials");
      cnit({username:"",password:""})
    }
  };
  return (
    <>
  <div className="maincontainers">
    <Logininput handleLogin={handleLogin} />
  <div>
  <div className="logincontainer">
        <h4 style={{margin:0}}>Create Ivokart Seller</h4>
        <div  >
          <label>Username:</label>
          <input name="username"
            type="text" 
            onChange={handleChange} value={oit.username}
            required 
          />
        </div>
        <div  >
          <label>Name:</label>
          <input name="name"
            type="text" 
            onChange={handleChange} value={oit.name}
            required 
          />
        </div>
        <div  >
          <label>Adminid:</label>
          <input name="adminid"
            type="text" 
            onChange={handleChange} value={oit.adminid}
            required 
            pattern="^[A-Z]-\d{3}$"
            title="Sample: A-111"
            style={{ border: oit.adminid && !/^[A-Z]-\d{3}$/.test(oit.adminid) ? "3px solid red" : "" }}
          />
        </div>
        {oit.adminid && !/^[A-Z]-\d{3}$/.test(oit.adminid) &&  <span style={{fontSize:"15px",color:"red",textDecoration:"none",backgroundColor:"white",margin:"5px"}}>Sample: A-111</span>}
 
        <div>
          <label>Password:</label>
          <input name="password"
            type="password" 
            onChange={handleChange} value={oit.password}
            required 
            pattern="^[A-Z].{4}[A-Z]$"
            title="Password must be 6 characters long, start & end with an uppercase letter."
            style={{ border: oit.password && !/^[A-Z].{4}[A-Z]$/.test(oit.password) ? "3px solid xx`x`red" : "" }}
          />
        </div>
        {oit.password && !/^[A-Z].{4}[A-Z]$/.test(oit.password) &&  <span style={{fontSize:"15px",color:"red",textDecoration:"none",backgroundColor:"white",margin:"5px"}}>Password must be 6 characters, start & end with an uppercase.</span>}
        <button
  style={{marginTop: "10px" }}
  onClick={createcustomer}
  disabled={!(oit.username.trim() !== "" &&
    oit.name.trim() !== "" &&
    oit.adminid.trim() !== "" &&
    oit.password.trim() !== "" &&
    /^[A-Z].{4}[A-Z]$/.test(oit.password) && /^[A-Z]-\d{3}$/.test(oit.adminid))}
>
  Create Seller
</button>
 
        </div>
  </div>
  </div>
 </>
 );
};

export default Login;