
import {  useDispatch, useSelector} from "react-redux";
import "../styles/Customermp.css"
import {addcartitems, deletecartitems} from "../slices/Cartitems"
import { RootState } from "../Store"


const Customermp = () => {
//   const disp=useDispatch()
  const itemsData=useSelector((state:RootState)=>state.Adminitems.items);
  const cartdata=useSelector((state:RootState)=>state.Cartitems.cartitems);
  const dispatch=useDispatch();
  const tprice=cartdata.reduce((a,b)=>a+(b.price),0);
  const gst=tprice+((18*tprice)/100);
  return (
<>
 <div className="bs">
 <div className="ls"><h1>Ivokart items</h1>
    {itemsData?.map((ele, ci) => {
      return (
        <h2 key={ci}>
          <span>
            <span>{ci}:</span>{ele.title}
          </span>
          <span>Category: {ele.category}</span>
          <span>Price:Rs {ele.price}</span>
           <span className="spanbtn" onClick={()=>{dispatch(addcartitems(ele))
           }} >Add</span>
        </h2>
      );
    })}
  </div>

    <div className="rs"><div className="mainspan">
    <span style={{textDecoration:"underline"}}>Cart  : </span><span>Total:Rs {gst.toFixed(2)}(18% GST included)</span>
    </div>
  {cartdata?.map((ele, ci) => {
    return (
      <h2 key={ci}>
        <span>
          <span>{ci}:</span> Item Name: {ele.title}
        </span>
        <span>Price: Rs {ele.price}</span>
         <span className="spanbtn" onClick={() => { dispatch(deletecartitems(ele.id)) }} >Delete</span>
      </h2>
    );
  })}
</div>
</div>


</>

  )
}

export default Customermp