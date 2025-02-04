
import {  useDispatch, useSelector} from "react-redux";
import "../styles/Customermp.css"
import {addcartitems, deletecartitems} from "../slices/Cartitems"


const Customermp = () => {
//   const disp=useDispatch()
  const itemsData=useSelector((state)=>state.Adminitems.items);
  const cartdata=useSelector((state)=>state.Cartitems.cartitems);
  const dispatch=useDispatch()
  return (
<>
 <div className="bs">
 <div className="ls"><h1>Ivokart items</h1>
    {itemsData?.map((ele, ci:number) => {
      return (
        <h2 key={ci}>
          <span>
            <span>{ci} )</span> Item Name: {ele.itemname}
          </span>
          <span>Category: {ele.itemcategory}</span>
          <span>Price:Rs {ele.itemprice}</span>
           <span onClick={()=>{dispatch(addcartitems(ele))
           }} style={{ border: "2px solid red" }}>Add</span>
        </h2>
      );
    })}
  </div>

    <div className="rs"><h1><span>Cart</span><span>Total:Rs {cartdata.reduce((a,b)=>a+(b.itemprice),0)}</span></h1>
  {cartdata?.map((ele, ci:number) => {
    return (
      <h2 key={ci}>
        <span>
          <span>{ci} )</span> Item Name: {ele.itemname}
        </span>
        <span>Category: {ele.itemcategory}</span>
        <span>Price: Rs {ele.itemprice}</span>
         <span onClick={() => { dispatch(deletecartitems(ele.id)) }} style={{ border: "2px solid red" }}>Delete</span>
      </h2>
    );
  })}
</div>
</div>


</>

  )
}

export default Customermp