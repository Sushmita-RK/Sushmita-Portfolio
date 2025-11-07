// src/components/Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Change FaHackerRank to FaHackerrank here
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from 'react-icons/fa';
import { profileData } from '../data';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          
          <Col md={4} className="text-center text-md-start mb-2 mb-md-0">
            <p>Dedicated to creating impactful solutions!</p>
          </Col>

          <Col md={4} className="text-center mb-2 mb-md-0">
            <p>Copyright &copy; {currentYear} {profileData.name}</p>
          </Col>

          {/* Social Icons Updated */}
          <Col md={4} className="text-center text-md-end">
            {/* TODO: Add your GitHub link in href="#" */}
            <a href="https://github.com/Sushmita-RK" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/sush-rk" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            {/* TODO: Add your HackerRank link in href="#" */}
            {/* Change FaHackerRank to FaHackerrank here */}
            <a href="https://hackerrank.com/sushmitakalasag1" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaHackerrank />
            </a>
            <a href={`mailto:${profileData.email}`} className="social-icon">
              <FaEnvelope />
            </a>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;