import { useDispatch, useSelector } from "react-redux";
import "../styles/Adminmp.css";
import { additems, deleteitems } from "../slices/Adminitems";
import { useGetCartsQuery } from "../apis/Cartapi";
import { RootState } from "../Store";
import Navigationbar from "./Navigationbar";

interface itemstype {
  category: string;
  price: number;
  title: string;
  id: string;
}

const Adminmp = () => {
  const itemsData = useSelector((state: RootState) => state.Adminitems.items);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetCartsQuery(undefined);

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching data</h2>;

  const allProducts = data;

  return (
    <>
    <Navigationbar/>
      <div>
        <h1>Seller Items</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allProducts?.map((ele: itemstype, ci: number) => (
              <tr key={ci}>
                <td>{ci + 1}</td>
                <td>{ele.title}</td>
                <td>{ele.category}</td>
                <td>Rs {ele.price}</td>
                <td>
                  <button className="edit-btn" onClick={() => dispatch(additems(ele))}>
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h1>To Customer</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {itemsData?.map((ele: itemstype, ci: number) => (
              <tr key={ci}>
                <td>{ci + 1}</td>
                <td>{ele.title}</td>
                <td>{ele.category}</td>
                <td>Rs {ele.price}</td>
                <td>
                  <button className="edit-btn" onClick={() => dispatch(deleteitems(ele.id))}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Adminmp;
