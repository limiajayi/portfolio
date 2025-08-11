import './Projects.css'

const Project = () => {
  return (
    <div className="project border">
      hi im small project
    </div>
  )
}

const Projects = () => {
  return (
    <div className="projects">
        
        <div className="bigProject border">
          Hi im big project
        </div>
        <Project />
        <Project />
        <Project />
    </div>
  )
}

export default Projects