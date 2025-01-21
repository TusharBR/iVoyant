

import { useState, useEffect } from 'react';

const data = ['kgf','kgf2','kantara','max','goat','martin'];
const App = () => {
  
  const [input, setinput] = useState<string | undefined>(undefined);
  const [op, setop] = useState<string[]>([]);
if(input==='')
{
  setinput(undefined)
}
useEffect(()=>{
  
 const opp = data.filter((item)=>item.toLowerCase().startsWith(input as string));
 setop(opp)
},[input])
  return (
    <div >
      <h1>Searching</h1>
      <input
        type="text"
        placeholder="Search users"
        value={input || ""}
        onChange={(e) => setinput(e.target.value)}
    
      />
     {op.map((pics)=>{
      return(<li key={pics}>{pics}</li>)
     })}

    </div>
  );
};
export default App;