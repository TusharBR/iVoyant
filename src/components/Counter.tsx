import { useState } from "react";

const Counter = ()=>{
    const [count,setcount]=useState<number>(0);
    const updatemyfunc=()=>{
      setcount(count+1);
    }
    return(
      <div>
        <h2>My Counter App - {count}</h2>
        <h3 onClick={updatemyfunc} className="counterbutton">Button</h3>
      </div>
    )
}
export default Counter