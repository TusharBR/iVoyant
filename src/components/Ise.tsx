import Navbar from "./Navbar";

const Ise = () => {
  return (
   <>
   <Navbar/>
   <div className="home-container">
      <header className="home-header">
        <h1>Welcome ISE Books</h1>
        <p>Shaping the new technology for the technological world.</p>
      </header>
      
      <section className="home-section">
        <img style={{height:"700px"}} src="https://wallpaperaccess.com/full/4386359.jpg" alt="College Campus" className="home-image" />
      </section>
      
      <section className="home-section">
        <h2>Concepts of core Information science</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget venenatis elit.</p>
      </section>
      
      <section className="home-section">
        <h2>Our Courses for Information science</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo, tincidunt nisi eget.</p>
      </section>
      

    </div>
   </>
  );
};

export default Ise;