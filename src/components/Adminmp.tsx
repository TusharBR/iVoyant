import {  useDispatch, useSelector} from "react-redux";
import "../styles/Adminmp.css"
import {additems, deleteitems} from "../slices/Adminitems"
import { useGetCartsQuery } from '../apis/Cartapi';
import { RootState } from "../Store"; 
interface itemstype
{
    category:string,   
    price:number,
    title:string,
    id:string
}
const Adminmp = () => {
  
//   const disp=useDispatch()
  const itemsData=useSelector((state:RootState)=>state.Adminitems.items);
  const dispatch=useDispatch();
  const { data, error, isLoading } = useGetCartsQuery(undefined);
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching data</h2>;

  const allProducts =data;

  return (
<>
<div>
  <h1>Seller items</h1>
    {allProducts?.map((ele:itemstype, ci:number) => {
      return (
        <h2 key={ci}>
          <span>
            <span>{ci}:</span> Item Name: {ele.title}
          </span>
          <span>Category: {ele.category}</span>
          <span>Price:Rs {ele.price}</span>
           <span className="edit-btn" onClick={()=>{dispatch(additems(ele))
           }} >Add</span>
        </h2>
      );
    })}
  </div>

    <div>
      <h1>To customer</h1>
  {itemsData?.map((ele:itemstype, ci:number) => {
    return (
      <h2 key={ci}>
        <span>
          <span>{ci} )</span> Item Name: {ele.title}
        </span>
        <span>Category: {ele.category}</span>
        <span>Price: Rs {ele.price}</span>
         <span className="edit-btn" onClick={() => { dispatch(deleteitems(ele.id)) }} >Delete</span>
      </h2>
    );
  })}
</div>
</>

  )
}

export default Adminmp