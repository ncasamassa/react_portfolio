// src/App.js
import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Experience />
      <Projects />
      {/* Include ProjectCard component as needed */}
      <Services />
      <Footer />
    </div>
  );
}

export default App;
