
import { useDispatch, useSelector} from "react-redux";
import "../styles/Maindetails.css"
import {deleteuser} from "../allowedusers"



const Main = () => {
  const disp=useDispatch()
  const users=useSelector((state)=>state.users);
  return (
    <div>
      {users.map((ele,ci:number)=>{
        return <h2 key={ci}>
          <span><span>{ci} )</span>Username : {ele.username}</span>
          <span>Name : {ele.name}</span>
          <span>Branch : {ele.branch}</span>
          <span onClick={()=>{disp(deleteuser(ele.id))}} style={{border:"2px solid red"}}>Delete</span>
          </h2>
      })}
    </div>
  )
}

export default Main