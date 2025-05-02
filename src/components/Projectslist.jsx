

import React, { useEffect, useState } from 'react';
import Projects from './Projects'; 
import { Container, Row, Col } from 'react-bootstrap';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to load projects:', err));
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">🚀 My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Projects
              title={project.title}
              text={project.text}
              image={project.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsList;
