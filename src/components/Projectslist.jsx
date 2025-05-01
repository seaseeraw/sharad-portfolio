import React, { useEffect, useState } from 'react';
import Projects from './projects';
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
    <Container>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4}>
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
