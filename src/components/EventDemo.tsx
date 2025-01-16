import { useState } from "react"


const EventDemo=()=> {
    
    const[oldtxt,updatedtxt]=useState<string>("Click the button below to update the above text");
    const[beforecpy,aftercpy]=useState<string>("***Click the button below to copy this text***");
    const[oldcolor,updatedcolor]=useState<string>("red");

    const updatetext=()=>updatedtxt("Button is clicked");

    const copyfunc=()=>
    {
        navigator.clipboard.writeText(beforecpy); 
        aftercpy("Text copied")
    }
    
    const mouseovering=()=>updatedcolor("yellow");
    const mouseLeaving=()=>updatedcolor("red");

  return (
    <>
       <div className="firstdiv">
       <p>{oldtxt}</p>
       <button onClick={updatetext}>Click here</button>
       </div>
       <hr />
       <hr />
       <div className="seconddiv" style={{backgroundColor:`${oldcolor}`}}>
        <p onMouseOver={mouseovering}
        onMouseLeave={mouseLeaving}>Hover the mouse here</p>
       </div>
       <hr />
       <hr />
       <div className="thirddiv" >
        <p >{beforecpy}</p>
        <button disabled={beforecpy==="Text copied"?true:false} onClick={copyfunc}>Copy text</button>
       </div>
    </>
  )
}
export default EventDemo