import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const skills = [
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'JavaScript', icon: faJs },
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'Git', icon: faGitAlt },
  { name: 'GitHub', icon: faGithub }
];

const Skills = () => {
  return (
    <Container className="text-center my-5">
      <h2>My Skills</h2>
      <Row className="justify-content-center">
        {skills.map((skill, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4">
            <FontAwesomeIcon
              icon={skill.icon}
              size="4x"
              className="text-primary mb-2"
            />
            <p>{skill.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
