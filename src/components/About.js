// src/components/About.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { profileData } from '../data';

function About() {
  return (
    <Container as="section" id="about">
      {/* Heading is outside the platter and centered */}
      <h2 className="mb-4 text-center">About Me</h2>
      
      <div className="section-platter">
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            
            <h4 className="mb-4">
              Hello, I'm <span className="text-gradient-teal">{profileData.name}</span>
            </h4>
            
            {profileData.aboutMe.map((paragraph, index) => (
              <p 
                key={index} 
                className="lead" 
                style={{color: 'var(--text-secondary)'}}
              >
                {paragraph}
              </p>
            ))}

          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;