// Hero.jsx
import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero.json";
 // Download your Lottie JSON file locally

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Hero Text */}
          <div className="hero-text" data-aos="fade-right">
            <h1>
              Turning Ideas Into{" "}
              <span style={{ color: "var(--secondary)" }}>Digital Reality</span><br />
            
            </h1>
           
           <h3>Dhruv Prajapati</h3><br />
           
            <p>
              I'm a frontend developer passionate about creating beautiful,
              functional, and user-friendly web experiences that bring ideas to
              life.
            </p>
            <a href="#projects" className="btn">
              View My Work
            </a>
          </div>

          {/* Hero Animation */}
          <div className="hero-animation" data-aos="fade-left">
            <Lottie
              animationData={heroAnimation}
              loop
              autoplay
              style={{ width: "100%", height: "400px" }}
            />
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
