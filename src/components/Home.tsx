
import "../styles/Home.css";
import Navbar from "./Navbar";

const Home= () => {
  return (
    <><Navbar />
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our College</h1>
        <p>Shaping the future with knowledge and innovation.</p>
      </header>
      
      <section className="home-section">
        <img src="https://collegepresidency.com/images/presidency%20Building.jpg" alt="College Campus" className="home-image" />
      </section>
      
      <section className="home-section">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget venenatis elit.</p>
      </section>
      
      <section className="home-section">
        <h2>Our Courses</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus commodo, tincidunt nisi eget.</p>
      </section>
      
      <section className="home-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</li>
          <li>Integer aliquet, risus in consequat sollicitudin.</li>
        </ul>
      </section>
    </div></>
  );
};

export default Home;