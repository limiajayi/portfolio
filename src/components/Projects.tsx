import { useEffect, useState } from 'react'
import '../styles/Projects.css'
import type { Repo } from '../App.types'
import Project from './Project'

const url = 'https://api.github.com/users/limiajayi/repos'

const Projects = () => {
    const [repos, setRepos] = useState<Repo[]>([])
    // const [error, setError] = useState<string | null>(null)
    // const [isLoading, setIsLoading] = useState<boolean>(false)

    const getRepos = async () => {
        const response = await fetch(url)
        const repos = await response.json()

        const reposArray = repos.filter((repo: Repo) => {
            return repo.name === "Travelling-Agent" 
            || repo.name === "Java-Space-Game"
            || repo.name === "Affirmations"
            || repo.name === "PlotThePlot-demo"
        })

        setRepos(reposArray)

    }

    useEffect(() => {getRepos()}, [])
    const sortedRepos: Repo[]  = [...repos].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

    return (
        <div className="projects">
            {sortedRepos.map((repo: Repo, index: number) => {
                if (index === 0) {
                    return <Project  text={"Current Project"} key={repo.id} className={"bigProject border"} color={"pink"} repo={repo} />
                }
                return <Project text={"./Projects"} key={repo.id} className={"project border"} color={"purple"} repo={repo}  />
            })}
        </div>
    )
}

export default Projects