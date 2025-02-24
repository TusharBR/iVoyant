import { useEffect, useState } from "react"
const Api = () => {
    
    let [abc,setabc]=useState();
    let [cond,setcond]=useState(false);
    let [iniidx,setiniidx]=useState();
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=20")
        .then((data)=>data.json())
        .then((data)=>setabc(data.results.map((cv)=>{
            return cv.email
        })))
    }, [])


    abc?.sort()
    const overlining = (idx) => {
        setcond(!cond)
        setiniidx(idx)
      };
      const deleteobj=(idx1)=>
      {
     abc= abc.filter((cv)=>cv!==idx1)
       setabc(abc)
       setcond(false)       
      }
    return (
        <>
    {abc?.map((cv,idx)=>{
        return(
            <h1 style={{border:"2px solid red ",display:"flex",justifyContent:'space-between',alignItems:"center"}} id={idx} key={idx}>
                <span >{idx}{")"} {(cond && idx==iniidx) ?<s>{cv}</s>:cv}</span>
                 <button onClick={()=>deleteobj(cv)}>Delete</button>
            <input type="checkbox" checked={(cond && idx==iniidx)} className="inp" onClick={()=>overlining(idx)}></input>
           
            </h1>
        )
    })}
    </>
  )
}

export default Api