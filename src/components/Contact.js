
// src/components/Contact.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { profileData } from '../data';
import emailjs from 'emailjs-com';

function Contact() {
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_panos96',    // 1. Double-check this
      'template_j4p1x7p',   // 2. Double-check this
      e.target,
      'Za6eD0ydZWneTLANy'        // 3. Double-check this (This is the Public Key)
    )
    .then((result) => {
        console.log(result.text);
        setStatus('Message Sent Successfully!');
        e.target.reset();
    }, (error) => {
        // --- THIS IS THE CHANGE ---
        // This will print the *real* error from EmailJS
        console.error("EmailJS Error:", error.text); 
        setStatus(`Failed: ${error.text}`);
    });
  };

  return (
    <Container as="section" id="contact">
      <h2 className="text-center mb-5">Get In Touch</h2>
      
      <div className="section-platter">
        <Row className="gy-4">
          
          {/* Column 1: Contact Info */}
          <Col md={5} className="d-flex flex-column justify-content-center contact-info">
            <h4 className="mb-4 text-gradient-teal">Contact Details</h4>
            <p>
              I'm open to discussing new opportunities and projects. Feel free to reach out!
            </p>
            <p>
              <strong>Email:</strong><br />
              <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
            </p>
            <p>
              <strong>LinkedIn:</strong><br />
              <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer">
                {profileData.linkedin}
              </a>
            </p>
          </Col>

          {/* Column 2: Contact Form */}
          <Col md={7}>
            <h4 className="mb-4 text-gradient-teal">Send Me a Message</h4>
            
            <Form onSubmit={sendEmail}>
              
              {/* This 'name' MUST match your EmailJS template variable, e.g., {{name}} */}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" required />
              </Form.Group>

              {/* This 'name' MUST match your EmailJS template variable, e.g., {{email}} */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
              </Form.Group>

              {/* This 'name' MUST match your EmailJS template variable, e.g., {{message}} */}
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={4} placeholder="Your message" required />
              </Form.Group>
              
              <div className="text-center mt-4">
                <Button variant="primary" type="submit" size="lg">
                  Send Message
                </Button>
                {/* This will now show the real error, e.g., "Failed: The template_id is_invalid" */}
                {status && <p className="mt-3">{status}</p>}
              </div>
            </Form>
          </Col>
          
        </Row>
      </div>
    </Container>
  );
}

export default Contact;