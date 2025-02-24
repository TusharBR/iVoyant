import { useEffect, useState } from 'react';
const items = [
  { id: 1, name: 'Apple', category: 'Fruit', price: 1.20 },
  { id: 2, name: 'Banana', category: 'Fruit', price: 0.50 },
  { id: 3, name: 'Carrot', category: 'Fruit', price: 0.75 },
  { id: 4, name: 'Doughnut', category: 'Bakery', price: 1.50 },
  { id: 5, name: 'Eggplant', category: 'Vegetable', price: 2.00 },
];
const SortableFilterableList = () => {

  const [categorystate,setcategorystate]=useState(null);
  let [filteredItems,setfilteredItems] = useState(items);
  const categoryfunc=(e)=>{
    console.log(e.target.value);
    setcategorystate(e.target.value)
  }
useEffect(()=>{
if(categorystate!==null)
{  const filteredItems1=items.filter((cv)=>cv.category===categorystate);
   setfilteredItems(filteredItems1)
}
if(categorystate==="All")
{  
   setfilteredItems(items)
}
},[categorystate])

  return (
<div className="p-4">
<div className="mb-4">
<label className="mr-2">Sort by:</label>
<select 
          className="border p-1 rounded"

>
<option value="name">Name</option>
<option value="category">Category</option>
<option value="price">Price</option>
</select>
</div>
<div className="mb-4">
<label className="mr-2">Filter by category:</label>
<select 
          className="border p-1 rounded" onChange={(e)=>categoryfunc(e)}
>
<option value='All'>All</option>
<option value="Fruit">Fruit</option>
<option value="Vegetable">Vegetable</option>
<option value="Bakery">Bakery</option>
</select>
</div>
<ul className="list-disc pl-5">
        {filteredItems.map(item => (
<li key={item.id} className="mb-2">
            {item.name} - {item.category} - ${item.price.toFixed(2)}
</li>
        ))}
</ul>
</div>
  );
};
export default SortableFilterableList;