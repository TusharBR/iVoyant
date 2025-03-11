  import { useContext } from "react";
  import { DndContext } from "../Context/Dndcontext";


  const Navbar = () => {
    const context = useContext(DndContext);

    if (!context) {
      throw new Error("Navbar must be used within a DndProvider");
    }
  
    const { handleToggle } = context;
    return (
      <nav className="navbar">
      
        <div className="navbar-left" style={{margin:"0 0 0 20px"}}>
          <span className="icon" onClick={handleToggle}><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="34"
        height="34"
        fill="currentColor"
      >
        <path d="M50.01,56.074h-35.989c-3.309,0-5.995-2.686-5.995-5.995v-36.011c0-3.308 2.686-5.994 5.995-5.994h35.989c3.309,0 5.995,2.686 5.995,5.994v36.011c0,3.309-2.686,5.995-5.995,5.995Zm-25.984,-4v-40h-9.012c-1.65,0.001-2.989,1.34-2.989,2.989v34.022c0,1.649 1.339,2.989 2.989,2.989h9.012Zm24.991,-40h-20.991v40h20.991c1.65,0 2.989-1.34 2.989-2.989v-34.022c0-1.649-1.339-2.988-2.989-2.989Z" />
      </svg></span>
        
      </div> 
          
      <div className="navbar-center">
        <span className="title">Website Builder</span>
      </div>
      <div className="navbar-right" style={{margin:"0 20px 0 0"}}>
        <span className="nav-icon">←</span>
        <span className="nav-icon">→</span>
        <button className="view-page">View page</button>
        <button className="publish">
           Publish
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
