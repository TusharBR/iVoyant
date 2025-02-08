import {  useState } from "react";
import "../styles/Login.css"
import { useDispatch, useSelector } from "react-redux";
// import { useSelector} from "react-redux";
import {createuser} from "../slices/loginpage"
import { useNavigate } from "react-router-dom";
import { RootState } from "../Store";



const Login= () => {
   const dispatch= useDispatch()
   const [oit,nit]=useState({ username: "",name:"", mail: "",password:"",isadmin:"false"});
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
    nit({ username: "",name:"", mail: "",password:"" ,isadmin:"false"})
   }
  // const [Authenticated, setAuthenticated] = useState<boolean>(false);


 const users=useSelector((state:RootState)=>state.credentials.users);
 const navg=useNavigate()

  const handleLogin = () => {
   

    // // Check users array to handle navigation
    const foundUser = users.find(
      (user) => user.username === coit.username && user.password === coit.password && user.isadmin==="false"
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
  <div className="maincontainers">
  <div className="logincontainer">
        <h4 style={{margin:0}}>Customer Login</h4>
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
        <div  >
          <label>Mail:</label>
          <input name="mail"
            type="text" 
            onChange={handleChange} value={oit.mail}
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