import {  useState } from "react";
import "../../Centerpage.css";
import { useDrop } from "react-dnd";
import Button from "../atoms/Button";
import { createUniqueRandomGenerator } from "../../components/atoms/Random";
import { nanoid } from "nanoid";
import { CSSProperties } from "react";
const getUniqueNumber = createUniqueRandomGenerator(0, 100); 

interface isMobileViewInterface
{
  isMobileView:boolean;
}

const App = ({isMobileView}:isMobileViewInterface) => {
  const [droppedbuttons, setDroppedbuttons] = useState<{ ki: string; val: string }[]>([]);


  // Function to delete a button by ID
  function deletebtn(id: string) {

    setDroppedbuttons(droppedbuttons.filter((item) => item.ki !== id));
    // console.log("button",droppedbuttons)
  }
// console.log("button",droppedbuttons)
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


  const desktopStyles: { [key: string]: CSSProperties } = {
    container: {
      display: "flex",
      flexWrap: "nowrap", // Fix: Removed the typo in 'no-wrap'
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      gap: "20px", // Space between items
    },
  
    content: {
      width: "55%",
      lineHeight: "25px",
     
    },
  
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "0 0 20px 0"
    },
    imageContainer: {
          width: "45%",
    },

  
    // Responsive styles
    mobileContainer: {
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
    },
  
    mobileContent: {
      width: "90%",
    }, 
    mobileImageContainer: {
      width: "90%",
      margin: "20px 0 0 15px",     
    },
  };
  return (
   
    <div className="container" style={isMobileView ? desktopStyles.mobileContainer : desktopStyles.container}>
      
      <div className="content" style={isMobileView ? desktopStyles.mobileContent : desktopStyles.content}>
        <h1 style={desktopStyles.heading}>This page was built as a Editor</h1>
        <p >
        This page is built as an interactive editor, allowing seamless modifications.
You can bring your own components and customize them in real time.
Enjoy a flexible and efficient way to edit your React projects effortlessly.
        </p>
        <div className="buttons" ref={drop}  >
          <button className="github" >Visit GitHub</button>
          <button className="edit" >Edit this page</button>
          {droppedbuttons.map((item) => (
            <Button key={item.ki} id={item.ki} content={item.val} deletebtn={deletebtn} />
          ))}
        </div>
      </div>
      <div className="image-container" style={isMobileView?desktopStyles.mobileImageContainer:desktopStyles.imageContainer}>
        <img style={{width:"100%",borderRadius:"8px"}}
          src="https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg"
          alt="Aerial View"
        />
      </div>
    </div>
   
  );
};

export default App;
