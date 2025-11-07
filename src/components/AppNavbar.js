// src/components/AppNavbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { profileData } from '../data';
import { Link } from 'react-scroll'; // 1. Import Link

function AppNavbar() {
  return (
    <Navbar sticky="top" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{profileData.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            {/* --- THIS IS THE CHANGE --- */}
            {/* I've added the "mx-2" class to each Link for spacing */}

            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="nav-link mx-2">Home</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link mx-2">About</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="nav-link mx-2">Skills</Link>
            <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-70} duration={500} className="nav-link mx-2">Experience</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link mx-2">Projects</Link>
            <Link activeClass="active" to="education" spy={true} smooth={true} offset={-70} duration={500} className="nav-link mx-2">Education</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link mx-2">Contact</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;