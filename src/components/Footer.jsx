// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* Social Links */}
        <div className="social-links">
          <a href="#" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>

        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
