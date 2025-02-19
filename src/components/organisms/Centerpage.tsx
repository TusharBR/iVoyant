import {  useState } from "react";
import "../../Centerpage.css";
import { useDrop } from "react-dnd";
import Button from "../atoms/Button";
import { createUniqueRandomGenerator } from "../../components/atoms/Random";
import { nanoid } from "nanoid";
const getUniqueNumber = createUniqueRandomGenerator(0, 100); 
const App = () => {
  const [droppedbuttons, setDroppedbuttons] = useState<{ ki: string; val: string }[]>([]);


  // Function to delete a button by ID
  function deletebtn(id: string) {

    setDroppedbuttons(droppedbuttons.filter((item) => item.ki !== id));
    console.log("button",droppedbuttons)
  }
console.log("button",droppedbuttons)
  // Drop Zone for Buttons
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["BUTTON"],
    drop: () => {
      setDroppedbuttons((prev) => {
        const btnno=getUniqueNumber();
        const newId = nanoid();
        return [...prev, { ki: newId, val: `Button ${btnno}` }];
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div className="container">
      <div className="content">
        <h1 style={{ margin: "0 0 20px 0" }}>This page was built as a Editor</h1>
        <p>
          This is self-hosted visual editor for React. Bring your own
          components and make site changes instantly, without a deploy.
        </p>
        <div className="buttons" ref={drop}>
          <button className="github">Visit GitHub</button>
          <button className="edit">Edit this page</button>
          {droppedbuttons.map((item) => (
            <Button key={item.ki} id={item.ki} content={item.val} deletebtn={deletebtn} />
          ))}
        </div>
      </div>
      <div className="image-container">
        <img
          src="https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg"
          alt="Aerial View"
        />
      </div>
    </div>
  );
};

export default App;
