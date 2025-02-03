import { Link } from "react-router-dom";

const Cse = () => {
  return (
   <>
 
   <div className="home-container">
      <header className="home-header">
        <h1>Welcome CSE Books</h1>
        <p>Shaping the new technology for the technological world.</p>
        <Link to="/library"><h2>Back to library</h2></Link>
      </header>
      
      <section className="home-section">
        <img style={{height:"700px"}} src="https://courses.msqfon.com/wp-content/uploads/2021/03/program-bachelor-of-science-in-computer-science-1920x1080-1.jpg" alt="College Campus" className="home-image" />
      </section>
      
      <section className="home-section">
        <h2>Concepts of core Computer science</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget venenatis elit.</p>
      </section>
      
      <section className="home-section">
        <h2>Our Courses for computer science</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo, tincidunt nisi eget.</p>
      </section>
      

    </div>
   </>
  );
};

export default Cse;