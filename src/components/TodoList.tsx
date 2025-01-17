import {  useState } from "react"

const TodoList=()=> {
    const [oldarray,newarray]=useState<string[]>([]);
    const [oldinput,newinput]=useState<string>("");
   
  
    const additems=()=>{
        newarray([...oldarray,oldinput])
        newinput("");
    }
    const handlechange=(e: React.ChangeEvent<HTMLInputElement>) =>{
        newinput(e.target.value)
       const tm= setTimeout(()=>{
            console.log(e.target.value)
            clearTimeout(tm)
        },3000)
    }
    
  return (
    <div className="tododiv"><label htmlFor="">Items : </label>
   <input name="items" value={oldinput} onChange={handlechange}  placeholder="Add items here"/>
   &nbsp;&nbsp;<button disabled={!oldinput?true:false} onClick={additems}>Add item</button>
   <p>Items in array are</p>
<ol className="arritems">
    {oldarray.map((ele,ci)=>{
        return(
            <li key={ci}>{ele}</li>
        )
    })}
</ol>
   </div>
  )
}

export default TodoList