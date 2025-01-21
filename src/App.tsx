import { useState } from "react";

const App=()=>
{
  const [arr,newarr]=useState<number[]>([1,2,3,4,5])
  function priorityfunc(mypara:number):void
  {
    const newArray = [...arr];
    
    newArray.splice(newArray.indexOf(mypara),1)
    newArray.unshift(mypara);
    newarr(newArray)
  }
  return(
    <div>
 {arr.map((id)=>{
      return(<div style={{border:"2px solid red",padding:"10px",display:"flex",justifyContent:"space-evenly",marginTop:"20px"}} key={id}>card number{id} <button onClick={()=>priorityfunc(id)}>Pin &#9652;</button></div>)
    })}
    </div>
  )
}
export default App
