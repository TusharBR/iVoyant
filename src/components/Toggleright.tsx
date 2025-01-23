import { useContext } from "react"
import {formdata} from "./Maincontainer"

interface disabletype
{
    disablesb:boolean
}
const Toggleright = ({disablesb}:disabletype) => {
    const beforesmt = useContext(formdata)
     //const [disablesb,enablesb]=useState<boolean>(false);
    const myobj=({color:"black",backgroundColor:"grey",padding:"50px",border:"2px solid white"})  
  return (

    <div  className="rightside" >
    {disablesb?<div style={{...myobj,display:"flex",flexDirection:"column",overflow:"scroll",overflowX:"hidden"}}>
        {beforesmt.map((ele)=>[
            <div style={{border:"2px solid white",display:"flex",justifyContent:"center",padding:0,margin:0}}>
          Name: {ele?.name}<br />
           Email: {ele?.email} <br />
           City: {ele?.city}<br />
           Pincode: {ele?.pincode}<br />
           Area: {ele?.area}<br />
          </div>
        ])}
        
      </div>:""}

      </div>
  )
}

export default Toggleright