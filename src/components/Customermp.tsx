import { useDispatch, useSelector } from "react-redux";
import "../styles/Customermp.css";
import { addcartitems, deletecartitems } from "../slices/Cartitems";
import { RootState } from "../Store";
import Navigationbar from "./Navigationbar";
import { useState } from "react";

const Customermp = () => {
  const itemsData = useSelector((state: RootState) => state.Adminitems.items);
  const cartdata = useSelector((state: RootState) => state.Cartitems.cartitems);
  const dispatch = useDispatch();
  const [Cartview, setCartview] = useState(true);
  const tprice = cartdata.reduce((a, b) => a + b.price, 0);
  const gst = tprice + (18 * tprice) / 100;

  return (
    <>
      <Navigationbar />
      <div className="bs">
        <div className="headerClass">
          <h1>Ivokart items</h1>
          <div className="icon-container" onClick={() => setCartview(!Cartview)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
              <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <sup className="notificationBadge">{cartdata?.length}</sup>
          </div>
        </div>
        <div>
          {Cartview && (
            <div className="ls">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsData?.map((ele, ci) => (
                    <tr key={ci}>
                      <td>{ci}</td>
                      <td>{ele.title}</td>
                      <td>{ele.category}</td>
                      <td>Rs {ele.price}</td>
                      <td>
                        <button onClick={() => dispatch(addcartitems(ele))}>Add</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!Cartview && (
            <div className="rs">
              <div className="mainspan">
                <span>Cart :</span> <span>Total: Rs {gst.toFixed(2)} (18% GST included)</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartdata?.map((ele, ci) => (
                    <tr key={ci}>
                      <td>{ci}</td>
                      <td>{ele.title}</td>
                      <td>Rs {ele.price}</td>
                      <td>
                        <button onClick={() => dispatch(deletecartitems(ele.id))}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Customermp;
