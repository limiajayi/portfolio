import { useState } from 'react'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Nav from './components/Nav.jsx'
import Skills from './components/Skills.jsx'
import './styles/App.css'

const App = () => {
  
  return (
    <>
    <Nav />
    <div className='main-page'>
      <Home />
      <Projects />
      <Skills />
    </div>
    </>
  )
}

export default App
