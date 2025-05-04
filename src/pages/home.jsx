import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import developerAnimation from "/public/assets/developer.json";

import '../App.css';

const AboutMe = () => {
  return (
    <div style={{ background: '#f9f9f9', padding: '4rem 0' }}>
      <Container>
        <Row className="align-items-center">
          
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

         
          <Col md={6}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Hello, I'm Sharad Pathak 👋</h2>
              <p>
                I am a cybersecurity analyst.
              </p>
              <p>
              I am a passionate and detail-driven Cybersecurity Analyst with a strong foundation in threat detection, incident response, and digital forensics. With a post-graduate degree in Cybersecurity and Computer Forensics and hands-on experience analyzing real-world threats, I thrive on solving complex security challenges that protect businesses, data, and people. I specialize in identifying vulnerabilities before attackers do using tools like Kali Linux, Wazuh, Wireshark, and Splunk while crafting effective defense strategies to keep networks resilient and secure. Whether it's investigating a breach or building proactive security policies, I bring clarity, precision, and action to every mission. I am not just here to work  I am here to make a difference in an evolving cyber world. Let’s connect and collaborate on creating safer digital spaces. <br/>🛡️ Ready to secure your organization? Let’s talk
              </p>

              <Button
                variant="primary"
                href="/resume.pdf" 
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
