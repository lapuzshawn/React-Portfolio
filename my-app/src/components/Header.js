import React from 'react';
import Navigation from './Navigation';
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';

function Header() {
  return (
    <header>
      <h1>Welcome to Shawn Lapuz's Website</h1>
      
        <Navigation />
      
    </header>
  );
}

export default Header;
