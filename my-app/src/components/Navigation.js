import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styles/style.css';
import { Button, Nav, Navbar } from "react-bootstrap";


function Navigation() {
  const location = useLocation();

  return (
       <Navbar expand="lg" variant="dark" bg="none">
    
        <Nav className="mr-auto">
          <NavLink to="/" exact className="nav-link" activeClassName="active">
            About Me
          </NavLink>
          <NavLink to="/portfolio" className="nav-link" activeClassName="active">
            Portfolio
          </NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
          {/* <NavLink to="/resume" className="nav-link" activeClassName="active">
            Resume
          </NavLink> */}
        </Nav>
    </Navbar>
  );
}

export default Navigation;
