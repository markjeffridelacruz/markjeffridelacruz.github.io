import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Footer />
      <button id="btnScrollToTop">
        <span><i className="fa fa-chevron-up"></i></span>
      </button>
    </div>
  );
}

export default App;
