import React from 'react';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

export default function Home() {
  return (
    <section id="Home" className="p-8 bg-gray-300 h-full">
        <About/>
        <Projects/>
        <Skills/>        
        <Contact/>
    </section>
    
  );
};


