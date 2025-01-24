import {useState} from 'react'
import Toggleright from './Toggleright';
import { createContext } from 'react';
import Navbar from './Navbar';

interface details
    {
      name:string, email: string,pincode: number, city:string,area: string 
    }
    
    const formdata=createContext<details[]>([{ name: "", email: "",pincode: 577000, city: "",area: "" }]);
const Maincontainer = () => {
  
    const darkstyle=({color:"black",backgroundColor:"grey",padding:"5px",border:"2px solid white"})      
      const [oit,nit]=useState<details>({ name: "", email: "",pincode: 577000, city: "",area: "" });
      const [beforesmt,aftersmt]=useState<details[]>([]);
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
        nit({ ...oit, [e.target.name]: e.target.value });
      };
      const handleAddItem = ()  => {
        
        aftersmt([{name:oit.name,email:oit.email,pincode:oit.pincode,city:oit.city,area:oit.area},...beforesmt,]);
        nit({name: "", email: "",pincode: 577000, city: "",area: "" });
      };
      const myobj={...darkstyle,padding:"50px"};
    const myobj1={...darkstyle,padding:"0px"};
const [disablesb,enablesb]=useState<boolean>(false);
function mytogglefunc()
{
  enablesb(!disablesb)
}
console.log(beforesmt)
    return (
      <><formdata.Provider value={beforesmt}>
            <Navbar mytogglefunc={mytogglefunc}/>
        <div className="bothsides">
            
              <div className="leftside">
              <div style={myobj} className="leftside1"><form onSubmit={(e) => {e.preventDefault();handleAddItem()}}>
    
                <h3>Fill form for admi  ssion</h3>
      <div>
        <label htmlFor="name">Name:</label>
        <input   onChange={handleChange} value={oit.name}  style={myobj1} type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>
    
      <div>
        <label htmlFor="email">Email:</label>
        <input  onChange={handleChange} value={oit.email}  style={myobj1} type="text" id="email" name="email" placeholder="Enter your email" required />
      </div>
    
      <div>
        <label htmlFor="city">City:</label>
        <input  onChange={handleChange} value={oit.city}  style={myobj1} type="text" id="city" name="city" placeholder="Enter your city" required />
      </div>
    
      <div>
        <label htmlFor="pincode">Pincode:</label>
        <input   onChange={handleChange} value={oit.pincode} style={myobj1} type="number" min={577000} id="pincode" name="pincode" placeholder="Enter your pincode" required />
      </div>
    
      <div>
        <label htmlFor="area">Area:</label>
        <input   onChange={handleChange} value={oit.area} style={myobj1}  name="area" placeholder="Describe your area" required></input>
      </div>
    
      <button style={myobj1} type="submit" className="btnsubmit">Submit</button>
    </form>
     </div>
              </div>
             
            <Toggleright disablesb={disablesb}/>
            
            </div></formdata.Provider></>
    
    
           
        
        
      )
}

export default Maincontainer;
export {formdata};