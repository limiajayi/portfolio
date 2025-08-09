import { useState } from 'react'
import Info from './components/Info.jsx'
import Nav from './components/Nav.jsx'
import './styles/App.css'

const App = () => {
  
  return (
    <>
    <Nav />
    <div className='main-page'>
      <Info />
    </div>
    </>
  )
}

export default App
