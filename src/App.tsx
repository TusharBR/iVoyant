import {useRef, useState} from 'react'
import Component from "./Component.tsx"

const App = () => {
  const [chk, setchk] = useState<boolean>(true);
  const inputref = useRef(null)

  function myfunc():void{  
    setchk(!chk)
    
    if(chk===true)
    {inputref.current.style.border="2px solid red";
    inputref.current.style.color="red";
    }
    else 
    {
      inputref.current.style.border="2px solid black";
      inputref.current.style.color="black";
      }
  }
  return (
    <div>
      <nav ref={inputref} style={{backgroundColor:"white",border:"2px solid black",display:"flex",justifyContent:"space-evenly",listStyle:"none",padding:"10px",color:"black"}}>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>login</li>
        <li><input type='checkbox' onClick={myfunc} /></li>
      </nav>
      <Component pref={inputref}/>
    </div>
  )
}

export default App