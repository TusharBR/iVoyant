import { useState, useEffect } from 'react';


const data = ['apple','grapes','carrot','jam','beans','bread','kiwi','banana','puff','cake','choco','tomato','onion'];
const fruits = ['apple','grapes','kiwi','banana'];
const bakery = ['jam','bread','puff','cake','choco'];
const veg1 = ['carrot','beans','tomato','onion'];
const App = () => {
  
  const [input, setinput] = useState("");
  const [fru, setfru] = useState<string[]>([]);
  const [bak, setbak] = useState<string[]>([]);
  const [veg, setveg] = useState<string[]>([]);

useEffect(()=>{
  const x=fruits.includes('apple')
  console.log(x)
 const opp = data.filter((item)=>item.toLowerCase()===input);
 fruits.map((ele)=>{
  
  if(ele===opp[0])
  {
    setveg([]);
    setbak([]);
    setfru(opp)
  }
 })
 bakery.map((ele)=>{
  
  if(ele===opp[0])
  {
    setveg([]);
    setfru([]);
    setbak(opp);
  }
 })
 veg1.map((ele)=>{
  if(ele===opp[0])
  {
    setbak([]);
    setfru([]);
    setveg(opp)
  }
 })
 
},[input])


  return (
    <div >
      <h1>Sort items to friuts veg bakery items</h1>
      <input
        type="text"
        placeholder="Search users"
        value={input}
        onChange={(e) => setinput(e.target.value)}
    
      />
     {data.map((its)=>{
      return(<li key={its}>{its}</li>)
     })}

     <h2>Fruits:{fru.map((its)=>{
      return(<span key={its}>{its}</span>)
     })}</h2>
     <h2>Bakery:{bak.map((its)=>{
      return(<span key={its}>{its}</span>)
     })}</h2>
     <h2>Vegetables:{veg.map((its)=>{
      return(<span key={its}>{its}</span>)
     })}</h2>

    </div>
  );
};

export default App;