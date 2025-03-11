import { useContext, useState } from "react";
import { useDrag } from "react-dnd";
import "../../Leftcontainer.css";
import { DndContext } from "../Context/Dndcontext";

const sections = [
  {
    title: "TYPOGRAPHY",
    items: ["Header","Footer"],
  },
  {
    title: "ACTIONS",
    items: ["Button"],
  },
  {
    title: "OTHERS",
    items: ["Card"],
  },
];

const LeftContainer = () =>{
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    Object.fromEntries(sections.map((section) => [section.title, true]))
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };
  const context = useContext(DndContext);

  if (!context) {
    throw new Error("Navbar must be used within a DndProvider");
  }

  const { toggle,handleSize } = context;

  return (
    <>
      {toggle && (
        <div
          className="left-container"
          style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
        >
          <h3 >
            <span>Components</span>
            <span >
              <span onClick={()=>handleSize({resize:true,size:"500px"})}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
              </span>
              <span onClick={()=>handleSize({resize:true,size:"750px"})}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tablet"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg>
              </span>
              <span onClick={()=>handleSize({resize:false,size:"95%"})}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
            </span>
              </span>
          </h3>
          {sections.map((section, index) => (
            <div key={index} style={{ width: "100%", textAlign: "center" }}>
              <div
                className="dropdown-header"
                onClick={() => toggleSection(section.title)}
              >
                <span style={{opacity:"70%"}}>{section.title}</span><span> {openSections[section.title] ? (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className  ="lucide lucide-chevron-down"> <path d="M6 15l6-6 6 6"></path></svg>) : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="M6 9l6 6 6-6"></path> </svg>}</span>
              </div>
              {openSections[section.title] && (
                <div style={{display:"ruby",justifyContent:"center"}}>
                  {section.items.map((item, idx) => (
                    <DraggableButton key={idx} label={item} type={item.toUpperCase()} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const DraggableButton = ({ label, type }: { label: string; type: string }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <button
      ref={drag}
      className={`btn ${isDragging ? "dragging" : ""}`}
      style={{
        display: "flex",
        justifyContent:"space-between",
        width: "100%",
        marginBottom: "10px",
        fontFamily:"Verdana",
        cursor: "grab",
        backgroundColor:"rgb(245, 245, 245)",
        color: "#rgb(0,0,0)",
        border: "2px solid grey",
        borderRadius: "2px",
        fontSize: "18px",

      }}
    >
     <span> {label} </span> <span><svg viewBox="0 0 20 20" width="12" fill="currentColor"><path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path></svg></span>
    </button>
  );
};

export default LeftContainer;
