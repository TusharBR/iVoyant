import {  useDispatch, useSelector} from "react-redux";
import "../styles/Adminmp.css"
import {additems, deleteitems} from "../slices/adminitems"

const indarkstore=[
    { id: "X9Y8Z7", itemname: "Samsung Galaxy S23", itemcategory: "Electronics", itemprice: 899 },
    { id: "P4Q5R6", itemname: "Sony WH-1000XM5", itemcategory: "Accessories", itemprice: 349 },
    { id: "L3M2N1", itemname: "Nike Air Max", itemcategory: "Footwear", itemprice: 129 },
    { id: "V7W8X9", itemname: "Adidas Ultraboost", itemcategory: "Footwear", itemprice: 149 },
    { id: "D6E5F4", itemname: "MacBook Air M2", itemcategory: "Electronics", itemprice: 1199 },
    { id: "K9L8M7", itemname: "Apple Watch Series 8", itemcategory: "Wearable", itemprice: 399 },
    { id: "T1U2V3", itemname: "Dell XPS 13", itemcategory: "Electronics", itemprice: 1099 },
    { id: "C4D5E6", itemname: "HP Pavilion Gaming", itemcategory: "Electronics", itemprice: 799 },
    { id: "R3S2T1", itemname: "JBL Flip 6", itemcategory: "Accessories", itemprice: 99 },
    { id: "N6O5P4", itemname: "Levi's Slim Fit Jeans", itemcategory: "Clothing", itemprice: 59 },
    { id: "H7I8J9", itemname: "Ray-Ban Aviator Sunglasses", itemcategory: "Accessories", itemprice: 129 },
    { id: "G1H2I3", itemname: "Samsung Galaxy Tab S8", itemcategory: "Electronics", itemprice: 699 },
    { id: "F9G8H7", itemname: "Bose SoundLink Mini", itemcategory: "Accessories", itemprice: 179 },
    { id: "U3V2W1", itemname: "Fossil Gen 6 Smartwatch", itemcategory: "Wearable", itemprice: 299 },
]
const Adminmp = () => {
//   const disp=useDispatch()
  const itemsData=useSelector((state)=>state.Adminitems.items);
  const dispatch=useDispatch()
  return (
<>
<div>sasstill not available to user
    {indarkstore?.map((ele, ci) => {
      return (
        <h2 key={ci}>
          <span>
            <span>{ci} )</span> Item Name: {ele.itemname}
          </span>
          <span>Category: {ele.itemcategory}</span>
          <span>Price:Rs {ele.itemprice}</span>
           <span onClick={()=>{dispatch(additems(ele))
           }} style={{ border: "2px solid red" }}>Add</span>
        </h2>
      );
    })}
  </div>

    <div>to user
  {itemsData?.map((ele, ci) => {
    return (
      <h2 key={ci}>
        <span>
          <span>{ci} )</span> Item Name: {ele.itemname}
        </span>
        <span>Category: {ele.itemcategory}</span>
        <span>Price: ${ele.itemprice}</span>
         <span onClick={() => { dispatch(deleteitems(ele.id)) }} style={{ border: "2px solid red" }}>Delete</span>
      </h2>
    );
  })}
</div>
</>

  )
}

export default Adminmp