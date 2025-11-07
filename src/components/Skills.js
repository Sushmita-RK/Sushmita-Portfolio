// src/components/Skills.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { skillsData } from '../data';

function Skills() {
  const renderSkillList = (skills) => (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <li key={index} className="skill-item">
          {skill}
        </li>
      ))}
    </ul>
  );

  return (
    <Container as="section" id="skills">
      {/* Heading is outside the platter and centered */}
      <h2 className="text-center mb-4">Technical Skills</h2>

      <Row className="gy-4">
        <Col md={4} sm={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-gradient-teal">Languages</Card.Title>
              {renderSkillList(skillsData.languages)}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-gradient-teal">Frontend</Card.Title>
              {renderSkillList(skillsData.frontend)}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-gradient-teal">Backend</Card.Title>
              {renderSkillList(skillsData.backend)}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-gradient-teal">Databases</Card.Title>
              {renderSkillList(skillsData.databases)}
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} sm={12}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-gradient-teal">Soft Skills</Card.Title>
              {renderSkillList(skillsData.softSkills)}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;