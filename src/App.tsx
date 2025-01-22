import { useRef, useState } from "react"
import "./App.css"

const App = () => {
  const [timer1, timer2] = useState<number>(0);
  const [btn,btn2] = useState<boolean>(false);
  const timerid=useRef<number | null>(null)
  const handlestart=()=>
  {
    timerid.current=setInterval(()=>{
      timer2(timer1=>timer1+1)
    },1000);
   btn2(true)
  }
  const handlestop=()=>
  {
    
    clearInterval(timerid.current as number);
    timerid.current=null
    btn2(false)

  }
  return (
    <div>
     <div className="timer1">
     <h2>Timer with ref</h2>
     <h1>{timer1}</h1>
      <button onClick={handlestart} disabled={btn}>Start</button>
      <button onClick={handlestop} disabled={!btn}>Stop</button>
     </div>
    </div>
  )
}

export default App