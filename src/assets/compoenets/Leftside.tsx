import { useContext } from "react"
import "../styles/Leftside.css"
import {Cartcontext} from "../context/Cart"

const Leftside=()=>
{
    const { products,before, after } = useContext(Cartcontext);

    const additems = (...val) => {
        const [a,b,c]=val;
        after([...before,{
            "productId": a,
            "productName":b,
            "productPrice":Number(c)
          }]);
      
    };
  
    return(
        <div className="leftside">
{products.map((product) => (
        <div key={product.productId} className="productcard" >
          <h3>{product.productName}</h3>
          <p>Price:Rs.{product.productPrice.toFixed(2)}</p>
          <button onClick={() => additems(product.productId,product.productName,product.productPrice)}>Add item</button>
        </div>
      ))}
        </div>
    )
}
export default Leftside