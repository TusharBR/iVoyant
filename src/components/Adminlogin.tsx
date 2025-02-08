import {  useState } from "react";
import "../styles/Login.css"
import { useDispatch, useSelector } from "react-redux";
// import { useSelector} from "react-redux";
import {createuser} from "../slices/loginpage"
import { useNavigate } from "react-router-dom";

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
   const [coit,cnit]=useState({ username: "",password:"" });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>)   => {
     nit({ ...oit, [e.target.name]: e.target.value });
   };
   const chandleChange = (e: React.ChangeEvent<HTMLInputElement>)   => {
     cnit({ ...coit, [e.target.name]: e.target.value });
   };


   function createcustomer()
   {
    dispatch(createuser(oit))
    nit({ username: "",name:"", adminid: "",password:"" ,isadmin:"true"})
   } const users=useSelector((state:statetype)=>state.credentials.users);
 const navg=useNavigate()

  const handleLogin = () => {
   
    const foundUser = users.find(
      (user: { username: string; password: string; isadmin: string; }) => user.username === coit.username && user.password === coit.password && user.isadmin==="true"
    );
    if (foundUser) {
      
      cnit({username:"",password:""})
      navg("/Adminmp");
    } else {
      alert("Invalid credentials in verifyy");
      cnit({username:"",password:""})
    }
  };
  return (
    <>
  <div className="maincontainers">
  <div className="logincontainer">
        <h4 style={{margin:0}}>Ivokart Admin Login</h4>
        <div  >
          <label>Username:</label>
          <input name="username"
            type="text" 
            onChange={chandleChange} value={coit.username}
            required 
          />
        </div>

        <div>
          <label>Password:</label>
          <input name="password"
            type="password" 
            onChange={chandleChange} value={coit.password}
            required 
          />
        </div>

        <button style={{width:"20%",marginTop:"10px"}} onClick={()=>{handleLogin()}} disabled={!(coit.username.trim()!=="" && coit.password.trim()!=="")} >Login</button>

 
      
  </div>
  <div>
  <div className="logincontainer">
        <h4 style={{margin:0}}>Create Ivokart Admin</h4>
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
          />
        </div>

        <div>
          <label>Password:</label>
          <input name="password"
            type="password" 
            onChange={handleChange} value={oit.password}
            required 
          />
        </div>

        <button style={{width:"20%",marginTop:"10px"}} onClick={createcustomer}  disabled={!(oit.username.trim()!=="" && oit.password.trim()!=="")} >Create</button>
        
 
        </div>
  </div>
  </div>
 </>
 );
};

export default Login;