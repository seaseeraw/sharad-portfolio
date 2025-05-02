import React from 'react'
import Navs from './components/navs'
import ProjectsList from './components/projectslist'
import Skills from './components/skills'
import AboutMe from './pages/home'


const App = () => {
  return (
    <>
      <Navs />
      <ProjectsList/>
      <Skills/>
      <AboutMe/>
    </>
  )
}

export default App
