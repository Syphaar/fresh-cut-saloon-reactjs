// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import About from './Components/About';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ScrollToTop from "react-scroll-to-top";
import Sectionone from './Components/Sectionone';
import Services from './Components/Services';
import { useEffect, useState } from "react";


function App() {
  // const [count, setCount] = useState(0)
  const [activeSection, setActiveSection] = useState(""); // Track active section

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-size",
      delay: 500,
    });
    Aos.refresh();
  }, []);

  // Section references
  const sectiononeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (section) => {
    if (section === "homeRef") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        const targetRef = { sectiononeRef, servicesRef, aboutRef, blogsRef, contactRef }[section];
        targetRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔥 Track the active section using Intersection Observer (for the active navbar buttons)
  useEffect(() => {
    const observerOptions = { 
      root: null, //  Uses the viewport
      threshold: 0.2, // 40% of the section must be visible (threshold to detect the section)
      rootMargin: "-10% 0px -30% 0px", // Adjust detection timing
    }; // 60% of the section must be visible

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section ID
          // console.log("Active Section:", entry.target.id);
          // console.log("About Ref:", aboutRef?.current);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    [sectiononeRef, servicesRef, aboutRef, blogsRef, contactRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [sectiononeRef, servicesRef, aboutRef, blogsRef, contactRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);


  return (
    <>
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <Sectionone sectiononeRef={sectiononeRef} id="sectionone" />
      <Services servicesRef={servicesRef} id="services" />
      <About aboutRef={aboutRef} id="about" />
      <Blogs blogsRef={blogsRef} id="blogs" />
      <Footer contactRef={contactRef} id="contact" />
      <ScrollToTop smooth width="39" height="20" color="black"/>
    </>
  )
}

export default App
