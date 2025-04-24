import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Intro from './components/intro/Intro'
import Skills from './components/skills/Skills'
import Training from './components/Training/Training'
import Certificates from './components/certificates/Certificates'
import Education from './components/education/Education'
import Contact from './contact/Contact'
import Projects from './components/projects/Projects'

const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Intro/>
      <Skills/>
      <Training/>
      <Projects/>
      <Certificates/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default App
