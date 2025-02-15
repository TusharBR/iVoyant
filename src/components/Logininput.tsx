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
    <h4 style={{margin:0}}>Login</h4>
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
        pattern="^[A-Z].{4}[A-Z]$"
    title="Password must be 6 characters long, start & end with an uppercase letter."
    style={{ borderColor: coit.password && !/^[A-Z].{4}[A-Z]$/.test(coit.password) ? "red" : "" }} 
      />
    </div>
    <button
  style={{ marginTop: "10px" }}
  onClick={()=>{handleLogin(coit.username,coit.password)}}
  disabled={!(coit.username.trim() !== "" &&
    coit.password.trim() !== "" &&
    /^[A-Z].{4}[A-Z]$/.test(coit.password))}
>
Login
</button>
</div>
  )
}

export default Logininput