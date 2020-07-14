import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <button type="button" id="btnScrollToTop" className="btn btn-primary">
        <span><i className="fa fa-chevron-up"></i></span>
      </button>
    </div>
  );
}

export default App;
