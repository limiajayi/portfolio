import { useState, useEffect } from 'react'
import './Projects.css'
import Bar from './Bar'

const url = 'https://api.github.com/users/limiajayi/repos'

const Project = ({ className, color, repo }) => {
  return (
    <div className={className}>
      <Bar text={"Project"} color={color} />
      hi im a project
    </div>
  )
}

const Projects = () => {

  const [repos, setRepos] = useState([])

  const getRepos = async () => {
    const response = await fetch(url)
    const repos = await response.json();

    const reposArray = repos.filter((repo) => {
      return repo.name === "Actual-NEA" 
      || repo.name === "Java-Space-Game" 
      || repo.name === "motivation" 
      || repo.name === "comprehension"
    })

    setRepos(reposArray)
  }

  useEffect(() => {
    getRepos()
  }, [])



  return (
    <div className="projects border">
        <Project className={"bigProject border"} color={"pink"} />
        <Project className={"project border"} color={"purple"} />
        <Project className={"project border"} color={"purple"} />
        <Project className={"project border"} color={"purple"} />
    </div>
  )
}

export default Projects