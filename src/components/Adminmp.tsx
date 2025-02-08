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
console.log(data)
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching data</h2>;

  const allProducts =data;

  return (
<>
<div>sasstill not available to user
    {allProducts?.map((ele:itemstype, ci:number) => {
      return (
        <h2 key={ci}>
          <span>
            <span>{ci} )</span> Item Name: {ele.title}
          </span>
          <span>Category: {ele.category}</span>
          <span>Price:Rs {ele.price}</span>
           <span onClick={()=>{dispatch(additems(ele))
           }} style={{ border: "2px solid red" }}>Add</span>
        </h2>
      );
    })}
  </div>

    <div>to user
  {itemsData?.map((ele:itemstype, ci:number) => {
    return (
      <h2 key={ci}>
        <span>
          <span>{ci} )</span> Item Name: {ele.title}
        </span>
        <span>Category: {ele.category}</span>
        <span>Price: ${ele.price}</span>
         <span onClick={() => { dispatch(deleteitems(ele.id)) }} style={{ border: "2px solid red" }}>Delete</span>
      </h2>
    );
  })}
</div>
</>

  )
}

export default Adminmp