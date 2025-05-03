import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';

const certifications = [
  {
    title: 'CompTIA Security+ ce Certification',
    description: 'Validates foundational cybersecurity knowledge, including network security, threats, vulnerabilities, and risk management—ideal for entry- to mid-level security roles.',
    image: 'https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png',
    link: 'https://www.your-certificate-link.com'
  },
  {
    title: 'Certified in Cybersecurity (CC)',
    description: 'An entry-level certification by (ISC)² that covers essential cybersecurity principles, including threat management, incident response, and access control.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7LrYjDMaQbyW1m7d6m9NSA.png',
    link: 'https://www.your-certificate-link.com'
  },
  {
    title: 'Introduction to Cybersecurity',
    description: 'A foundational course exploring key cybersecurity concepts such as threat landscapes, basic security principles, cryptography, and network defense strategies.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7LrYjDMaQbyW1m7d6m9NSA.png',
    link: 'https://www.your-certificate-link.com'
  },
  {
    title: 'Networking Academy Learn-A-Thon 2020',
    description: 'Participated in Cisco Networking Academy\'s Learn-A-Thon, focusing on networking fundamentals, cybersecurity, and IoT through interactive and hands-on modules.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7LrYjDMaQbyW1m7d6m9NSA.png',
    link: 'https://www.your-certificate-link.com'
  },
  {
    title: 'Jupyter Notebook for Security Control Validation',
    description: 'Explores how to leverage Jupyter Notebooks for automating and validating security controls through scripting, data analysis, and visualization techniques.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7LrYjDMaQbyW1m7d6m9NSA.png',
    link: 'https://www.your-certificate-link.com'
  },
  {
    title: 'Introduction to EASY Framework for Threat Intelligence',
    description: 'An introductory course on using the EASY Framework for organizing and operationalizing threat intelligence in cybersecurity investigations and reporting.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7LrYjDMaQbyW1m7d6m9NSA.png',
    link: 'https://www.your-certificate-link.com'
  }
];

const SkillsCertifications = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Skills & Certifications</h2>
      <Row className="g-4">
        {certifications.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button
                  variant="primary"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillsCertifications;

