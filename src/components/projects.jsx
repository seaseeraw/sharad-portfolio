

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Project = ({ title, description, image, link }) => {
  return (
    <Card style={{ width: '100%', marginBottom: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Project;

