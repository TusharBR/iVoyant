import  {useState} from "react";
interface details {
  name: string;
  quantity: number;
}
const ShoppingList= () => {
  const [formData, setFormData] = useState<details[]>([]);
  const [oit,nit]=useState<details>({ name: "", quantity:0});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
    nit({ ...oit, [e.target.name]: e.target.value });
  };
  const handleAddItem = () => {
    if (oit.name && oit.quantity) {
      setFormData([
      ...formData,
      {name: oit.name, quantity: oit.quantity },
    ]);
      nit({ name: "", quantity: 0 });
    }

  };
  return (
    <div>
      <label htmlFor="">Name : </label>
      <input
        name="name"
        value={oit.name}
        onChange={handleChange}
        placeholder="Product name"
      /><br/>
      <br/>
      <label htmlFor="">quantity : </label>
      <input
      type="number"
        name="quantity"
        min={10}
        value={oit.quantity}
        onChange={handleChange}
        placeholder="quantity"
      />&nbsp;&nbsp;&nbsp;&nbsp;
      <button disabled={oit.name && oit.quantity?false:true  } onClick={handleAddItem}>Add item</button>
  <h5>Shopping items are:</h5>
  <ol className="itemsmap">
    {formData.map((ele,ci)=>{
        return(
            <li key={ci}>Product name is <span>{ele.name}</span> and quantity of that item is <span>{ele.quantity}</span></li>
        )
    })}
</ol>
</div>
  );
};
export default ShoppingList