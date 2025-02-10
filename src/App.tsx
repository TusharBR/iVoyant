
import { useState, useEffect } from 'react';
const data = ["Rajesh Patel",
 "Rajeev Sharma",
  "Vijay Gupta",
  "Anil Yadav",
  "Rakesh Mehta",
  "Suresh Patel",
  "Ajay Verma",
  "Vikram Singh",
  "Ravindra Bansal",
  "Rajiv Mishra",
  "Sunil Choudhary",
  "Vineet Saxena",        
  "Trikumar Tripathi",
  "Kunal Aggarwal",
  "Nitin Joshi",
  "Manoj Malhotra",
  "Pradeep Desai",
  "Deepak Kapoor",
  "Amit Kumar",
  "Ajay Thakur",
  "Ravi Nair"
];

const App = () => {
  
  const [input, setinput] = useState<string>('');
  const [op, setop] = useState<string[]>([]);

// useEffect(()=>{
  
//  const opp = data.filter((item)=>item.toLowerCase().startsWith(input as string));
//  setop(opp)
// },[input])

useEffect(()=>{
  if (!input) {
    setop([]); 
    return ;
  }
  
const timer1=setTimeout(() => {
  const opp = data.filter((item)=>item.toLowerCase().includes(input.toLowerCase()));
  setop(opp)
}, 1000);
 
return ()=>clearTimeout(timer1)

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

