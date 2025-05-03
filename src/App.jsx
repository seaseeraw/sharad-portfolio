
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navs from './components/navs';
import Connects from './components/connect'; // Capitalized correctly
import AboutMe from './pages/home';
import SkillsCertifications from './pages/SkillsCertification';
const App = () => {
  return (
    <Router>
      <Navs />

      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/connects" element={<Connects />} />
        <Route path="/skills" element={<SkillsCertifications />} />
      </Routes>
    </Router>
  );
};

export default App;
