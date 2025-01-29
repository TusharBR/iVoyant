import "../styles/Rightside.css"
import { useContext } from "react"
import {Cartcontext} from "../context/Cart"
const Rightside=()=>
    {
        const {before,after} = useContext(Cartcontext); 
        console.log(before.length)
        const removeitems = (val:number) => {
                    const updatedBefore = before.filter((_,ci) => ci !== val);
                                                 after(updatedBefore);
       
           console.log("Updated state after removal:", updatedBefore,before);

        };
        console.log(before,"rightside")
        return(
           <>
            
            <div className="rightside">
               
                {before.map((ele,ci)=>{
                    return(
                        <div key={ele.productId} className="productcard" >
          <h3>{ele.productName}</h3>
          <p>Price:Rs.{ele.productPrice.toFixed(2)}</p>
          <button onClick={() => removeitems(ci)}>Remove item</button>
        
        </div>
    
                    )
                })}
                </div>
               </>
          
        )
    }
    export default Rightside


