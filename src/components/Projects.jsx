import { useState, useEffect } from 'react'
import './Projects.css'
import Bar from './Bar'
import Description from './Description'

// api url for my repositories
const url = 'https://api.github.com/users/limiajayi/repos'

const Project = ({ className, color, repo }) => {

  return (
    <div className={className}>
      <Bar text={"Project"} color={color} />

      <Description 
      name={repo.name} 
      description={repo.description}
      language={repo.language}
      url={repo.clone_url}
      homepage={repo.homepage}/>

    </div>
  )
}


const Projects = () => {

  const [repos, setRepos] = useState([])

  const getRepos = async () => {
    const response = await fetch(url)
    const repos = await response.json();

    const reposArray = repos.filter((repo) => {
      return repo.name === "NEA" 
      || repo.name === "Java-Space-Game" 
      || repo.name === "Motivation" 
      || repo.name === "Annotations"
    })

    setRepos(reposArray)
  }

  useEffect(() => {
    getRepos()
  }, [])

  // sort repos by last updated, in ascending order 
  // most recent repo will be the first element
  const sortedRepos = [...repos].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));


  return (
    <div className="projects">

      {
        sortedRepos.map((repo) => {
          if (sortedRepos.indexOf(repo) === 0) {
            return  <Project id={repo.id} className={"bigProject border"} color={"pink"} repo={repo}/>
          }
          return (
            <Project id={repo.id} className={"project border"} color={"purple"} repo={repo}/>
          )
        })
      }
    </div>
  )
}

export default Projects