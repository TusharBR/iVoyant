
import "../styles/About.css";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container">
      <header className="about-header">
        <h1>About Our College</h1>
        <p>Empowering students with knowledge, innovation, and excellence.</p>
      </header>
      
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum in id esse ipsum ratione hic. Porro esse repellendus omnis tempore laudantium recusandae provident pariatur dolores repellat? Quod, ea libero!
        </p>
      </section>
      
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum in id esse ipsum ratione hic. Porro esse repellendus omnis tempore laudantium recusandae provident pariatur dolores repellat? Quod, ea libero!
        </p>
      </section>
      
      <section className="about-section achievements">
        <h2>Our Achievements</h2>
        <ul>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, veniam.</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, veniam.</li>
          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, veniam.</li>

        </ul>
      </section>
      
      <section className="about-section faculty">
        <h2>Our Faculty</h2>
        <div className="faculty-container">
          <div className="faculty-card">
            <h3>Rama Doe</h3>
            <p>Professor of CSE</p>
          </div>
          <div className="faculty-card">
            <h3>isha singh</h3>
            <p>HOD ,ISE</p>
          </div>
          <div className="faculty-card">
            <h3>Bharat raj</h3>
            <p>HOD, ECE</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
