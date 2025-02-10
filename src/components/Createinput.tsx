import { useState } from "react";


const Createinput = ({createcustomer,pload}) => {
       const [oit,nit]=useState({ username: "",name:"",[pload?"adminid":"mail"]: "",password:"",isadmin:pload?"true":"false"});
       const handleChange = (e: React.ChangeEvent<HTMLInputElement>)   => {
         nit({ ...oit, [e.target.name]: e.target.value });
       };
  return (
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
        onChange={handleChange} value={oit.pload?adminid:mail}
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

    <button style={{width:"20%",marginTop:"10px"}} onClick={()=>createcustomer(oit)}  disabled={!(oit.username.trim()!=="" && oit.password.trim()!=="")} >Create</button>
    

    </div>
  )
}

export default Createinput