import Home from "./components/Home"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import Extras from "./components/Extras"
import './styles/App.css'

function App() {

  return (
    <>
      <Nav />
      <div className="main">
        <Home />
        <Projects />
        <Extras />
        <div className='text'>Built and Designed by Temi Ajayi.</div>
      </div>
    </>
  )
}

export default App
