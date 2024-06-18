import React, { useState } from 'react';
import './Header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import Image from './../../Assets/PIXELTRAIL-LOGO-CURRENT.png'

const Header = () => {
  const [expanded, setExpanded] = useState(false);


  return (
    <header className="header animation">
      <Navbar expanded={expanded} className="Nav" expand="lg">
        <Container className='links'>
    
          <Navbar.Brand
            onClick={() => { setExpanded(false);}}
            as={Link}
            to="/"
            className="home"
          >
            Pixel Trail Development
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : 'expanded')}
            className="button"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => { setExpanded(false);}}
                as={Link}
                to="/pricing"
                className="pricing"
              >
                Pricing
              </Nav.Link>
              <Nav.Link
                onClick={() => { setExpanded(false);}}
                as={Link}
                to="/about"
                className="about"
              >
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => { setExpanded(false);}}
                as={Link}
                to="/contact"
                className="contact"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
