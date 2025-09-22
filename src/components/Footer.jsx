// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/Dhr-v20" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/dhruv-prajapati-9a4886250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://x.com/DhruvPr30321491?t=3lPH0xclfG41zQbvArVfRg&s=08" className="social-link">
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
