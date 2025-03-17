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
   const [loginToggle,setloginToggle]=useState(false)
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>)   => {
    nit({ ...oit, [e.target.name]: e.target.value });
  };
   function createcustomer()
   {
    dispatch(createuser(oit))
    nit({ username: "",name:"", adminid: "",password:"" ,isadmin:"true"});
    setloginToggle(!loginToggle)
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
  {loginToggle &&(
    <div>
    <Logininput handleLogin={handleLogin} />
    <div onClick={()=>setloginToggle(!loginToggle)}  style={{textAlign:"center",marginLeft:"50px",textDecoration:"underline",marginTop:"5px",fontSize:"larger"}}>Don’t have an account? Create account</div>
    </div>)}
  <div>
  {!loginToggle && <div className="logincontainer customerform">
        <h4 >Create Ivokart Seller</h4>
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
            className={oit.adminid && !/^[A-Z]-\d{3}$/.test(oit.adminid) ? "error-border" : ""}
          />
                        <span className={`error-message ${oit.adminid && !/^[A-Z]-\d{3}$/.test(oit.adminid) ? "show" : ""}`}>
                        Match as sample: A-111
              </span>
        </div>
        <div>
              <label>Password:</label>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                value={oit.password}
                required
                pattern="^[A-Z].{5}$"
                title="Password must be 6 characters long, start & end with an uppercase letter."
                className={oit.password && !/^[A-Z].{5}$/.test(oit.password) ? "error-border" : ""}
              />
              <span className={`error-message ${oit.password && !/^[A-Z].{5}$/.test(oit.password) ? "show" : ""}`}>Required 6 characters,start with uppercase.</span>
            </div>
        <button
  style={{marginTop: "10px" }}
  onClick={createcustomer}
  disabled={!(oit.username.trim() !== "" &&
    oit.name.trim() !== "" &&
    oit.adminid.trim() !== "" &&
    oit.password.trim() !== "" &&
    /^[A-Z].{5}$/.test(oit.password) && /^[A-Z]-\d{3}$/.test(oit.adminid))}
>
  Create Seller
</button>
 
        {!loginToggle && <div onClick={()=>setloginToggle(!loginToggle)} className="toggle-link">Already have an account? Login</div>}
        </div>}
        
  </div>
  </div>
 </>
 );
};

export default Login;