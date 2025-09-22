// Navbar.jsx
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuActive(false);
  };

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <nav>
            {/* Logo */}
           <div className="logo">
             <img className="logoimg" src="dhruvlogo.jpg" alt="logo" />
          
           </div>

          {/* Nav Links */}
          <ul className={`nav-links ${menuActive ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" onClick={handleLinkClick}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div
            className={`menu-toggle ${menuActive ? "active" : ""}`}
            onClick={() => setMenuActive(!menuActive)}
          >
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
