
import "../styles/Library.css";
import { Link} from "react-router-dom";
import Navbar from "./Navbar";

const Library = () => {
  return (
    <>
    <Navbar/>
    <div className="library-container">
      <header className="library-header">
        <h1>Welcome to Our College Library</h1>
        <p style={{fontSize:"x-large", textDecoration:"underline"}}><Link to="/cse">COMPUTER SCIENCE</Link> | <Link to="/ise">INFORMATION SCIENCE.</Link></p>
      </header>
      
      <section className="library-section">
        <img src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2020/09/Nakajima-Library-Akita-International-University-Japan.jpg" alt="Library" className="library-image" />
      </section>
      
      <section className="library-section">
        <h2>About the Library</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget venenatis elit.</p>
      </section>
 
      
      <section className="library-section">
        <h2>Library Services</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</li>
          <li>Integer aliquet, risus in consequat sollicitudin.</li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default Library;

