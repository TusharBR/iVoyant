import  { useState } from 'react'
interface inputprops
{
    handleLogin:(uname:string,pword:string)=>void,
}
const Logininput = ({handleLogin}:inputprops) => {
       const [coit,cnit]=useState({ username: "",password:"" });
       const chandleChange = (e: React.ChangeEvent<HTMLInputElement>)   => {
        cnit({ ...coit, [e.target.name]: e.target.value });
      };
  return (
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

    <button style={{width:"20%",marginTop:"10px"}} onClick={()=>{handleLogin(coit.username,coit.password)}} disabled={!(coit.username.trim()!=="" && coit.password.trim()!=="")} >Login</button>   
</div>
  )
}

export default Logininput