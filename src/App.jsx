import { useState } from 'react'
import Nav from './components/Nav.jsx'
import './styles/App.css'

const Skills = () => {
  return (
    <div className="skills border">

    </div>
  )
}

const Projects = () => {
  return (
    <div className="projects border">

    </div>
  )
}

const Home = () => {
  return (
    <div className='home border'>

    </div>
  )
}

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
