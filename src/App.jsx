import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import BackToTop from "./components/BackToTop";
import Services from "./components/Services";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
    <Navbar />
    <main className="snap-container">
        <section ><Hero /></section>
        <section ><About /></section>
        <section ><Skills /></section>
        <section ><Projects /></section>
        <section ><Experience /></section>
        <section ><Services /></section>
        <section ><Contact /></section>
        <section ><Footer /></section>
        
      </main>
      < BackToTop />
    </>
  );
}
