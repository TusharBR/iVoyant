import { useState } from "react";
import "../../Centerpage.css";
import { useDrop } from "react-dnd";
import Button from "../atoms/Button";

const App=() => {
      const [droppedbuttons, setDroppedbuttons] = useState<any[]>([]);
    
      // header Drop zone
      const [{ isOver }, drop] = useDrop(() => ({
        accept: ['BUTTON'],
        drop: (item: { id: string; type: string }) => {
            setDroppedbuttons((prev) => [...prev, item]);
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
        }),
      }));
  return (
    <div className="container">
      <div className="content">
        <h1 style={{margin:"0 0 20px 0"}}>This page was built with Puck</h1>
        <p>
          Puck is the self-hosted visual editor for React. Bring your own
          components and make site changes instantly, without a deploy.
        </p>
        <div className="buttons" ref={drop} >
          <button className="github">Visit GitHub</button>
          <button className="edit">Edit this page</button>
          {droppedbuttons.map((item, index) =>
            <Button key={index} id={item.id}>
            {`Button ${index + 1}`}
          </Button>

        )}
        </div>
      </div>
      <div className="image-container">
        <img src="https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg" alt="Aerial View" />
      </div>
    </div>
  );
};

export default App;

