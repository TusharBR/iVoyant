import { useState,useEffect} from 'react'

import './App.css'
type props={
  initial:number
}
function App({initial}:props) {
  const [count, setCount] = useState(initial)


  useEffect(()=>
  {
    console.log('component did mount');
    setTimeout(()=>{
      setCount(count+1)
    },1000)
    return ()=>
    {
      console.log('component will unmount',count)
    }
  },[count])




  return (
    <>
   
      <h1>Counter app - {count}</h1>
    
      <button >Click me</button>       
    </>
  )
}

export default App
