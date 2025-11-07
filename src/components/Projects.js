// src/components/Projects.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { projectsData } from '../data';

function Projects() {
  return (
    <Container as="section" id="projects">
      {/* 1. Heading is now OUTSIDE the platter */}
      <h2 className="text-center mb-5">Projects</h2>
      
      {/* 2. The platter is now BELOW the heading */}
      <div className="section-platter">
        <Row>
          {projectsData.map((project, index) => (
            <Col md={4} key={index} className="mb-4 d-flex align-items-stretch">
              <Card className="w-100">
                <Card.Body className="d-flex flex-column">
                  
                  <Card.Title className="text-gradient-teal">{project.title}</Card.Title>
                  
                  <Card.Subtitle className="mb-2 text-muted">{project.dates}</Card.Subtitle>
                  
                  <div className="mb-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <ul className="mt-2">
                    {project.description.map((point, i) => (
                      <li key={i}><small>{point}</small></li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button variant="primary" href={project.githubLink} target="_blank" className="me-2">GitHub</Button>
                    <Button variant="secondary" href={project.liveLink} target="_blank">Live Demo</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Projects;