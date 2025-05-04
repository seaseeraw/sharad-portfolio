import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';

const certifications = [
  {
    title: 'CompTIA Security+ ce Certification',
    description: 'Validates foundational cybersecurity knowledge, including network security, threats, vulnerabilities, and risk management—ideal for entry- to mid-level security roles.',
    image: 'src/assets/a.png',
    link: 'https://www.credly.com/badges/2bac54c8-6313-47b3-b623-1245bce51428/public_url'
  },
  {
    title: 'Certified in Cybersecurity (CC)',
    description: 'An entry-level certification by (ISC)² that covers essential cybersecurity principles, including threat management, incident response, and access control.',
    image: 'src/assets/b.png',
    link: 'https://www.credly.com/badges/36b5f2f8-5000-4654-9a54-55a6dcc3da3e/linked_in_profile'
  },
  {
    title: 'Introduction to Cybersecurity',
    description: 'A foundational course exploring key cybersecurity concepts such as threat landscapes, basic security principles, cryptography, and network defense strategies.',
    image: 'src/assets/c.png',
    link: 'https://www.credly.com/badges/146d1803-b002-4259-a610-f0aa208603e6/public_url'
  },
  {
    title: 'Networking Academy Learn-A-Thon 2020',
    description: 'Participated in Cisco Networking Academy\'s Learn-A-Thon, focusing on networking fundamentals, cybersecurity, and IoT through interactive and hands-on modules.',
    image: 'src/assets/d.png',
    link: 'https://www.credly.com/badges/ad2240d1-fa41-4e90-bee8-861f10d03cce/public_url'
  },
  {
    title: 'Jupyter Notebook for Security Control Validation',
    description: 'Explores how to leverage Jupyter Notebooks for automating and validating security controls through scripting, data analysis, and visualization techniques.',
    image: 'src/assets/e.png',
    link: 'https://www.credly.com/badges/6beb3eae-c844-4915-ad08-94132fcdb131'
  },
  {
    title: 'Introduction to EASY Framework for Threat Intelligence',
    description: 'An introductory course on using the EASY Framework for organizing and operationalizing threat intelligence in cybersecurity investigations and reporting.',
    image: 'src/assets/f.png',
    link: 'https://www.credly.com/badges/dd035584-89ed-43f9-858c-f9585c23f7b3'
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

