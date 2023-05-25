import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';


import AboutMe from './pages/AboutMe'; 
import Contact from './pages/Contact'; 
import PortfolioPage from './pages/PorfolioPage'; 
import Resume from './pages/Resume'; 



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="xapp">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  );
}

export default App;



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="bucket-app">
      <Portfolio />
      </div>

      </header>
    </div>
  );
}

export default App;
*/



/*
function App() {
  return (
    <div className="xapp">
      <PortfolioPage />
    </div>
  );
}

export default App;
*/