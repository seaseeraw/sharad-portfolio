import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import developerAnimation from "../assets/developer.json";

import '../App.css';

const AboutMe = () => {
  return (
    <div style={{ background: '#f9f9f9', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Lottie Animation or Image */}
          <Col md={6}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Lottie
                animationData={developerAnimation}
                loop={true}
                style={{ width: '100%', maxWidth: '400px' }}
              />
            </motion.div>
          </Col>

          {/* Text Content */}
          <Col md={6}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Hello, I'm Sharad Pathak 👋</h2>
              <p>
                I'm a cybersecurity analyst.
              </p>
              <p>
                I love open-source, exploring new tools, and solving real-world problems through my skills.
              </p>

              <Button
                variant="primary"
                href="/resume.pdf" // Place your resume in /public folder
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Download Resume
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
