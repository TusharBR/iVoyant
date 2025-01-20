
import { useState } from "react"
import "../styles/Maincontainer.css"
import { styling ,details} from "../types/styling"
  type Props= {darkstyle:styling}

const Maincontainer=({darkstyle}:Props)=> {

 
  const [oit,nit]=useState<details>({ name: "", email: "",pincode: 577000, city: "",area: "" });
  const [beforesmt,aftersmt]=useState<details>({ name: "", email: "",pincode: 577000, city: "",area: "" });
  const [disablesb,enablesb]=useState<boolean>(false);
    const myobj={...darkstyle,padding:"50px"};
    const myobj1={...darkstyle,padding:"0px"};
   

    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
        nit({ ...oit, [e.target.name]: e.target.value });
      };
      const handleAddItem = ()  => {
        
        aftersmt({...beforesmt,name:oit.name,email:oit.email,pincode:oit.pincode,city:oit.city,area:oit.area});
        nit({name: "", email: "",pincode: 577000, city: "",area: "" });
      };
      
  return (
    <div className="bothsides">
          <div className="leftside">
          <div style={myobj} className="leftside1"><form onSubmit={(e) => {e.preventDefault();handleAddItem()}}>

            <h3>Fill all the fields</h3>
  <div>
    <label htmlFor="name">Name:</label>
    <input autoComplete="off"  onChange={handleChange} value={oit.name}  style={myobj1} type="text" id="name" name="name" placeholder="Enter your name" required />
  </div>

  <div>
    <label htmlFor="email">Email:</label>
    <input autoComplete="off" onChange={handleChange} value={oit.email}  style={myobj1} type="email" id="email" name="email" placeholder="Enter your email" required />
  </div>

  <div>
    <label htmlFor="city">City:</label>
    <input autoComplete="off" onChange={handleChange} value={oit.city}  style={myobj1} type="text" id="city" name="city" placeholder="Enter your city" required />
  </div>

  <div>
    <label htmlFor="pincode">Pincode:</label>
    <input autoComplete="off"  onChange={handleChange} value={oit.pincode} style={myobj1} type="number" min={577000} id="pincode" name="pincode" placeholder="Enter your pincode" required />
  </div>

  <div>
    <label htmlFor="area">Area:</label>
    <input autoComplete="off"  onChange={handleChange} value={oit.area} style={myobj1}  name="area" placeholder="Describe your area" required></input>
  </div>

  <button style={myobj1} type="submit" className="btnsubmit">Submit</button>

  <button style={myobj1} onClick={()=>enablesb(!disablesb)} className="btnsubmit">Show Details</button>
</form>
 </div>
          </div>
          <div className="rightside">
        {disablesb?<div style={myobj}>
               Name: {beforesmt.name}<br />
               Email: {beforesmt.email} <br />
               City: {beforesmt.city}<br />
               Pincode: {beforesmt.pincode}<br />
               Area: {beforesmt.area}<br />
            
          </div>:""}
          </div>


       
    </div>
  )
}

export default Maincontainer