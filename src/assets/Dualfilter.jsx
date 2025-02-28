import { useEffect, useState } from 'react';

const items = [
  { id: 1, name: 'Apple', category: 'Fruit', price: 1.2 },
  { id: 2, name: 'Banana', category: 'Fruit', price: 0.5 },
  { id: 3, name: 'Carrot', category: 'Fruit', price: 0.75 },
  { id: 4, name: 'Doughnut', category: 'Bakery', price: 1.5 },
  { id: 5, name: 'Eggplant', category: 'Vegetable', price: 2.0 },
  { id: 6, name: 'Puff', category: 'Bakery', price: 2.5 },
  { id: 7, name: 'Beans', category: 'Vegetable', price: 1.8 },
  { id: 8, name: 'Biscuit', category: 'Bakery', price: 1.02 },
];

const SortableFilterableList = () => {
  const [categorystate, setcategorystate] = useState("All");
  const [sortstate, setsortstate] = useState("name");
  
  const [filteredItems1, setfilteredItems1] = useState(items);
  const [filteredItems, setfilteredItems] = useState(filteredItems1);
  const [filteredItems2, setfilteredItems2] = useState(filteredItems1);
  useEffect(() => {
    
    if (categorystate === "All") {
      setfilteredItems(filteredItems1);
    } else {
      const filtered = filteredItems1.filter((cv) => cv.category === categorystate);
      setfilteredItems2(filtered);
    }
  }, [categorystate]);

  useEffect(() => {
    setfilteredItems1((prevItems) => {
      return [...prevItems].sort((a, b) => {
        if (sortstate === "price") {
          return a.price - b.price;
        }
        return a[sortstate]?.localeCompare(b[sortstate]); 
      });
    });
  }, [sortstate]);
  
  useEffect(() => {
    setfilteredItems(filteredItems1)
  }, [filteredItems1])
  useEffect(() => {
    setfilteredItems(filteredItems2)
  }, [filteredItems2])
  

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select className="border p-1 rounded" onChange={(e) => setsortstate(e.target.value)}>
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="price">Price</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="mr-2">Filter by category:</label>
        <select className="border p-1 rounded" onChange={(e) => setcategorystate(e.target.value)}>
          <option value="All">All</option>
          <option value="Fruit">Fruit</option>
          <option value="Vegetable">Vegetable</option>
          <option value="Bakery">Bakery</option>
        </select>
      </div>

      <ul className="list-disc pl-5">
        {filteredItems.map((item) => (
          <li key={item.id} className="mb-2">
            {item.name} - {item.category} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortableFilterableList;