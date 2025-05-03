import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faMedium,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const skillLinks = [
  
  { name: 'GitHub', icon: faGithub, url: 'https://github.com/SharadPathak1215' },
  { name: 'LinkedIn', icon: faLinkedin, url: 'http://www.linkedin.com/in/cybersecsharad' },
  { name: 'Medium', icon: faMedium, url: 'https://medium.com/@pathaksp1215' }
];

const Connects = () => {
  return (
    <Container className="text-center my-5">
      <h2>My Skills</h2>
      <Row className="justify-content-center">
        {skillLinks.map((skill, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4">
            <a
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link text-center d-block"
            >
              <FontAwesomeIcon
                icon={skill.icon}
                size="4x"
                className="skill-icon mb-2"
                aria-label={skill.name}
              />
              <p>{skill.name}</p>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Connects;


