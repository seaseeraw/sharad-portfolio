
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navs from './components/navs';
import ProjectsList from './components/projectslist';
import Skills from './components/skills';
import AboutMe from './pages/home';

const App = () => {
  return (
    <Router>
      <Navs />

      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
};

export default App;
