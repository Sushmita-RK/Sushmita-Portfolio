// src/components/Experience.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { experienceData } from '../data';

function Experience() {
  return (
    <Container as="section" id="experience">
      {/* Heading is outside the platter and centered */}
      <h2 className="text-center mb-4">Experience</h2>

      <div className="section-platter">
        {experienceData.map((exp, index) => (
          <Row key={index} className="mb-4 experience-item">
            <Col md={8}>
              <h4 className="text-gradient-teal">{exp.role}</h4>
              <h5 style={{color: 'var(--text-secondary)'}}>{exp.company}</h5>
              <ul>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Col>
            <Col md={4} className="text-md-end">
              <strong>{exp.dates}</strong>
              <br />
              <em>{exp.location}</em>
            </Col>
          </Row>
        ))}
      </div>
    </Container>
  );
}

export default Experience;