import { useState, useEffect } from 'react'
import './Projects.css'
import Bar from './Bar'
import Description from './Description'

// github repository api url for projects component
const url = 'https://api.github.com/users/limiajayi/repos'

const Project = ({ text, className, color, repo }) => {

  return (
    <div className={className}>
      <Bar text={text} color={color} />

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

  //state object to store repo objects
  const [repos, setRepos] = useState([])

  const getRepos = async () => {
    const response = await fetch(url)
    const repos = await response.json();

    //filtering for specific projects based on their name
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

      {/* mapping each repo object to it's own project component */}
      {
        sortedRepos.map((repo) => {
          if (sortedRepos.indexOf(repo) === 0) {
            return  <Project text={"Current Project"} id={repo.id} className={"bigProject border"} color={"pink"} repo={repo}/>
          }
          return (
            <Project text={"Project"} id={repo.id} className={"project border"} color={"purple"} repo={repo}/>
          )
        })
      }

    </div>
  )
}

export default Projects