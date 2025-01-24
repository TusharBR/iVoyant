import "../styles/Rightside.css"
import { useContext } from "react"
import {Cartcontext} from "../context/Cart"
const Rightside=()=>
    {
        const {before,after} = useContext(Cartcontext); // Pro
        console.log(before.length)
        const removeitems = (val:number) => {
           // const [a,b,c]=val;

           const updatedBefore = before.filter((ele,ci) => ci !== val);
   
           
           // Update the state with the new array
           after(updatedBefore);
       
           console.log("Updated state after removal:", updatedBefore,before);
            // after([...before,{
            //     "productId": a,
            //     "productName":b,
            //     "productPrice":Number(c)
            //   }]);
          
        };
        console.log(before,"rightside")
        return(
           <>
            
            <div className="rightside">
                {before.map((ele,ci)=>{
                    return(
                        <div key={ele.productId} className="productcard" >
          <h3>{ele.productName}</h3>
          <p>Price: ${ele.productPrice.toFixed(2)}</p>
          <button onClick={() => removeitems(ci)}>Remove item</button>
        
        </div>
    
                    )
                })}
                </div>
               </>
          
        )
    }
    export default Rightside


