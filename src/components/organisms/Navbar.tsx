const Navbar = () => {
  return (
    <nav className="navbar">
     
      <div className="navbar-left">
        <span className="icon">☰</span>
      </div>      
      <div className="navbar-center">
        <span className="title">Component Editor</span>
      </div>
      <div className="navbar-right">
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
