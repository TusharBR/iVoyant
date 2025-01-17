
import Navbar from './components/Navbar'
import Maincontainer from './components/Maincontainer'
import { useState } from 'react'

function App() {
  interface styling
  {
    color:string,
    backgroundColor:string
    padding:string
    border:string
  }
    const [beforeclk,afterclk]=useState<boolean>(false)
    const [darkstyle,lightstyle]=useState<styling>({color:"white",backgroundColor:"grey",padding:"5px",border:"2px solid white"})
    function checkfunc()
    {
        if(beforeclk===false)
        {
            afterclk(true)
            lightstyle({color:"black",backgroundColor:"wheat",padding:"5px",border:"2px solid black"})
        }
        else
        {afterclk(false)
            lightstyle({color:"white",backgroundColor:"grey",padding:"5px",border:"2px solid white"})
        }

        
    }
  return (
    <>
      <Navbar checkfunc={checkfunc} darkstyle={darkstyle} beforeclk={beforeclk}/>
      <Maincontainer darkstyle={darkstyle} />
    </>
  )
}

export default App
