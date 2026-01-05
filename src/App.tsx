import Home from "./components/home/Home"
import Nav from "./components/Nav"
import Projects from "./components/projects/Projects"
import Extras from "./components/extras/Extras"
import './styles/App.css'

function App() {

  return (
    <>
      <Nav />
      <div className="main">
        <Home />
        <Projects />
        <Extras />
        <div className='fineprint'>Built and Designed by Temi Ajayi.</div>
      </div>
    </>
  )
}

export default App
