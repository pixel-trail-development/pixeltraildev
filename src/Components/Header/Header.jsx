import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="header animation">
      <Navbar expanded={expanded} className="Nav" expand="lg">
        <Container className='links'>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : 'expanded')}
            className="button"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-center">
              <Navbar.Brand
                onClick={() => { setExpanded(false); }}
                as={Link}
                to="/"
                className="home"
              >
                Pixel Trail Development
              </Navbar.Brand>
              
              
              <Nav.Link
                onClick={() => { setExpanded(false); }}
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
