import type { FC } from 'react'
import '../../styles/Project.css'
import type { ProjectProps } from '../../App.types'
import Bar from '../Bar'
import Description from './Description'
import { ProjectContextProvider } from './ProjectContextProvider'

const Project: FC<ProjectProps> = ({ text, className, color, repo }) => {
    return (
        <div className={className}>
            <Bar text={text} color={color} />

            <ProjectContextProvider  
            name={repo.name}
            description={repo.description} 
            language={repo.language} 
            url={repo.clone_url} 
            homepage={repo.homepage} 
            >
                <Description />
            </ProjectContextProvider>

        </div>
    )
}

export default Project