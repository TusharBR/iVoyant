import {  useEffect, useReducer, useState } from "react";
import "./index.css"

interface strtype
{
 arr:number[];
 
}
const App = () => {
  const initial:strtype={arr:[1,2,3,4,5]};
  const [first, setfirst] = useState<string>("");
  type actiontype =
{
 type:'push'|"pop"|'shift'|"unshift"
}&{inp?:typeof first}
  const reducerfunction=(state:strtype,action:actiontype):strtype=>{
    const newarr = [...state.arr];
    switch(action.type)
    {
      case "push":{
        newarr.push(Number(action.inp));
        return {arr:newarr}
      }
      case "pop":{

        newarr.pop()
        return {arr:newarr};
      }
      case "unshift":{
         newarr.unshift(Number(action.inp))
         return {arr:newarr};

      }
      case "shift":{
        newarr.shift()
        return {arr:newarr};
      }
      default :return{arr:state.arr}
      
    }
  }
  const [state, dispatch] = useReducer(reducerfunction,initial);
  useEffect(() => {
    console.log(state.arr)
   })
  return (
    <div className="div0">
      <div className="div1">
      <input type="number" min={0} value={first} placeholder="only numbers allowed" onChange={event=>setfirst(event.target.value)}/>
      <button onClick={()=>dispatch({type:'push',inp:first})} disabled={first.length?false:true }>Push</button>
      <button onClick={()=>dispatch({type:'pop'})} disabled={!first.length && state.arr.length ?false:true }>Pop</button>
      <button onClick={()=>dispatch({type:'unshift',inp:first})} disabled={first.length?false:true}>Unshift</button>
      <button onClick={()=>dispatch({type:'shift'})} disabled={!first.length && state.arr.length ?false:true }>Shift</button>
      </div>
       <div className="div2">
       {state.arr.join("-")}
       </div>
    </div>
  )
}

export default App