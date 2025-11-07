// src/components/Education.js

import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { educationData, certificationsData } from '../data';

function Education() {
  return (
    <Container as="section" id="education">
      {/* 1. Heading is now OUTSIDE the platter */}
      <h2 className="text-center mb-5">Education & Certifications</h2>

      {/* 2. The platter (in this case, the Row) is now BELOW the heading */}
      <Row>
        {/* --- Education Column --- */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <h3 className="text-center mb-4 text-gradient-teal">Education</h3>
              
              {educationData.map((edu, index) => (
                <div key={index} className="education-item"> 
                  <h5 className="text-gradient-teal">{edu.degree}</h5>
                  
                  <p className="mb-0" style={{color: 'var(--light-purple)'}}>
                    {edu.institution}
                  </p>
                  <p className="mb-1">
                    <strong>Result:</strong> {edu.result}
                  </p>
                  
                  <small style={{ color: 'var(--light-purple)', fontWeight: '500' }}>
                    {edu.dates}
                  </small>
                  
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        {/* --- Certifications Column --- */}
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <h3 className="text-center mb-4 text-gradient-teal">Certifications</h3>
              
              <ListGroup variant="flush">
                {certificationsData.map((cert, index) => (
                  <ListGroup.Item key={index} className="d-flex align-items-center">
                    <span style={{color: 'var(--primary-purple)', marginRight: '10px'}}>&#10003;</span> 
                    {cert}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;