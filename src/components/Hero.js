// src/components/Hero.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { profileData } from '../data';
import { FaGithub, FaLinkedin, FaHackerrank, FaDownload, FaPaperPlane, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <Container>
      <Row>
        <Col md={10}>
          
          <h1 className="hero-main-heading">
            <span className="hero-intro-text">Hello, This is</span> <br />
            <span className="hero-text-pink">{profileData.name}</span>, <br />
            <span className="hero-intro-text">I'm a </span>
            
            <TypeAnimation
              sequence={[
                'Software Engineer.',
                2000,
                'Full Stack Developer.',
                2000,
                'Java Specialist.',
                2000,
                'Web Developer.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="hero-text-teal"
              repeat={Infinity}
            />
          </h1>

          <div className="hero-socials">
            <a href="https://github.com/Sushmita-RK" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/sush-rk"target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://hackerrank.com/sushmitakalasag1" target="_blank" rel="noopener noreferrer" title="HackerRank">
              <FaHackerrank />
            </a>
            <a href={`mailto:${profileData.email}`} title="Email">
              <FaEnvelope />
            </a>
          </div>

          {/* Button section updated for consistency */}
          <div>
            <Button variant="secondary" href="#contact" className="me-3 btn-contact-me">
              <FaPaperPlane className="me-2" />
              Contact Me
            </Button>
            <Button 
              variant="primary"  /* <-- Use variant="primary" */
              href="/Resume sush.pdf"
              download
            >
              <FaDownload className="me-2" />
              Get Resume
            </Button>
          </div>

        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
