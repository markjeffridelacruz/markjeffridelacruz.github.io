import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Skills />
      <Experience />
      <Certifications />
      <button id="btnScrollToTop">
        <span><i class="fa fa-chevron-up"></i></span>
      </button>
    </div>
  );
}

export default App;
