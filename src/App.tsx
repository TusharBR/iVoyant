
import Navbar from './components/Navbar'
import Maincontainer from './components/Maincontainer'
import { useState } from 'react'
import { styling } from './types/styling'
function App() {
  
    const [beforeclk,afterclk]=useState<boolean>(false)
    const [darkstyle,lightstyle]=useState<styling>({color:"white",backgroundColor:"grey",padding:"5px",border:"2px solid white"})
    function checkfunc()
    {
        // if(beforeclk===false)
        // {
        //     afterclk(true)
        //     lightstyle({color:"black",backgroundColor:"wheat",padding:"5px",border:"2px solid black"})
        // }
        // else
        // {afterclk(false)
        //     lightstyle({color:"white",backgroundColor:"grey",padding:"5px",border:"2px solid white"})
        // }
        switch (beforeclk) {
          case false:
            afterclk(true);
             lightstyle({color:"black",backgroundColor:"wheat",padding:"5px",border:"2px solid black"});
            break;
          case true:
              afterclk(false);
             lightstyle({color:"white",backgroundColor:"grey",padding:"5px",border:"2px solid white"});
            break;


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
