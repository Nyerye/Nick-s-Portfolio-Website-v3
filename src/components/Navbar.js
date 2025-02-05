// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // For navigation links in the navbar
import './Navbar.css';  // Import the navbar-specific styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Nick's Portfolio</Link>
      </div>
      <ul>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <a 
            href="https://nyerye.github.io/Nick-s-Portfolio-Website-v3/NickResume.pdf" 
            download="NickResume.pdf" 
            className="resume-btn"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

