import React from "react";


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Left Icons */}
      <div className="navbar-left">
        <span className="icon">☰</span>
        <span className="icon">☰</span>
      </div>

      {/* Center Title */}
      <div className="navbar-center">
        <span className="title">Component Editor</span>
        <span className="separator">/</span>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <span className="nav-icon">←</span>
        <span className="nav-icon">→</span>
        <button className="view-page">View page</button>
        <button className="publish">
          🌐 Publish
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
