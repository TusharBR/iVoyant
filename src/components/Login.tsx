import {  useState } from "react";
import "../styles/Login.css"
import { useDispatch, useSelector } from "react-redux";
// import { useSelector} from "react-redux";
import {createuser} from "../slices/loginpage"
import { useNavigate } from "react-router-dom";
import { RootState } from "../Store";
import Logininput from "./Logininput";


const Login= () => {
   const dispatch= useDispatch()
   const [oit,nit]=useState({ username: "",name:"", mail: "",password:"",isadmin:"false"});
   const [,cnit]=useState({ username: "",password:"" });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>)   => {
    nit({ ...oit, [e.target.name]: e.target.value });
  };
   function createcustomer()
   {
    dispatch(createuser(oit))
    nit({ username: "",name:"", mail: "",password:"" ,isadmin:"false"})
   }
  const users=useSelector((state:RootState)=>state.credentials.users);
 const navg=useNavigate()

 const handleLogin = (uname:string,pword:string) => {
   
  const foundUser = users.find(
    (user: { username: string; password: string; isadmin: string; }) => user.username === uname && user.password === pword && user.isadmin==="false"
  );
  if (foundUser) {
    
    cnit({username:"",password:""})
    navg("/Customermp");
  } else {
    alert("Invalid credentials in verifyy");
    cnit({username:"",password:""})
  }
};
  return (
    <>
  <div className="maincontainers" >
  <Logininput handleLogin={handleLogin} />
  <div>
  <div className="logincontainer">
        <h4 style={{margin:0}}>Create Customer</h4>
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
        <div>
  <label>Mail:</label>
  <input
    name="mail"
    type="email"
    onChange={handleChange}
    value={oit.mail}
    required
    pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
    title="Enter a valid Gmail address (e.g., example@gmail.com)"
    style={{
      borderColor: oit.mail && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(oit.mail) ? "red" : "",
    }}
  />
</div>

        <div>
  <label>Password:</label>
  <input
    name="password"
    type="password"
    onChange={handleChange}
    value={oit.password}
    required
    pattern="^[A-Z].{4}[A-Z]$"
    title="Password must be 6 characters long, start & end with an uppercase letter."
    style={{ borderColor: oit.password && !/^[A-Z].{4}[A-Z]$/.test(oit.password) ? "red" : "" }}
  />
</div>
<button
  style={{marginTop: "10px" }}
  onClick={createcustomer}
  disabled={!(oit.username.trim() !== "" &&
    oit.name.trim() !== "" &&
    oit.mail.trim() !== "" &&
    oit.password.trim() !== "" &&
    /^[A-Z].{4}[A-Z]$/.test(oit.password))}
>
  Create Customer
</button>
 
        </div>
  </div>
  </div>
 </>
 );
};

export default Login;