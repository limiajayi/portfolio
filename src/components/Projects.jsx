import './Projects.css'
import Bar from './Bar'

const Project = () => {
  return (
    <div className="project border">
      <Bar text={"Project"} color={"purple"} />
      hi im small project
    </div>
  )
}

const Projects = () => {
  return (
    <div className="projects">
        
        <div className="bigProject border">
          <Bar text={"Big Project"} color={"pink"} />
          Hi im big project
        </div>
        <Project />
        <Project />
        <Project />
    </div>
  )
}

export default Projects