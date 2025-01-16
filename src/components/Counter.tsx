import { useState } from "react";

const Counter = ()=>{
    const [count,setcount]=useState<number>(0);
    const updatemyfunc=()=>{
      setcount(count+1);
    }
    return(
      <div>
        <h1>My Counter App - {count}</h1>
        <h2 onClick={updatemyfunc} className="counterbutton">Button</h2>
      </div>
    )
}
export default Counter