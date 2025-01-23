  import { RefObject } from "react";

  interface props{
      pref:RefObject<HTMLDivElement>
  }

  const Component = ({pref}:props) => {
    const myfunc1=()=>
    {
      if(pref.current)
      if(pref.current.style.backgroundColor==="white")
      {
          pref.current.style.backgroundColor="rgb(254, 97, 225)"
      }
      else {
        pref.current.style.backgroundColor="white"
      }
    }
    return (
      <div><hr /><br />component2 <br /><button onClick={myfunc1}>Background change</button></div>
    )
  }

  export default Component