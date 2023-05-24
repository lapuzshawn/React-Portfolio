import React from 'react';
import Navigation from './Navigation';
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';

function Header() {
  return (
    <header>
      <h1>Developer's Name</h1>
      <Router>
        <Navigation />
        <Footer />
      </Router>
    </header>
  );
}

export default Header;
