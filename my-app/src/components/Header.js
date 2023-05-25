import React from 'react';
import Navigation from './Navigation';
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="none" variant="dark" expand="md">
    <Container>
      <Navbar.Brand>Welcome to Shawn Lapuz's Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Navigation />
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export default Header;
