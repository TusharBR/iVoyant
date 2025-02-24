import { useEffect, useState } from "react"
import "../App.css"

const Api = () => {
    
    let [abc,setabc]=useState();
    let [cond,setcond]=useState(false);
    let [iniidx,setiniidx]=useState();
    useEffect(() => {
        const first=fetch("https://randomuser.me/api/?results=20")
        .then((data)=>data.json())
        .then((data)=>
            {
                console.log(data.results);
                setabc(data.results);
                console.log(abc,"hii i am abc")
    })
    }, [])

    // abc?.sort((a, b) => a.email.localeCompare(b.email));
    const emails=abc?.map((cv)=>{
        return cv.email
    })
    abc=emails?.sort()
    const overlining = (idx) => {
        setcond(!cond)
        setiniidx(idx)
        // const element = document.getElementById(idx).firstElementChild;
      
        // if (element.style.textDecoration === "line-through") {
        //   element.style.textDecoration = "none";
        // } else {
        //   element.style.textDecoration = "line-through";
        // }
      };
    return (
        <>
    {abc?.map((cv,idx)=>{
        return(
            <h1 style={{border:"2px solid red "}} id={idx} key={idx}>
                <span>{(cond && idx==iniidx) ?<s>{cv}</s>:<span>{cv}</span>}</span>
            <input type="checkbox" onClick={()=>overlining(idx)}></input>
            </h1>
        )
    })}
    </>
  )
}

export default Api