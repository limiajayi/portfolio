import type { FC } from 'react'
import '../../styles/Project.css'
import type { ProjectProps } from '../../App.types'
import Bar from '../Bar'
import Description from './Description'

const Project: FC<ProjectProps> = ({ text, className, color, repo }) => {
    return (
        <div className={className}>
            <Bar text={text} color={color} />

            <Description 
                name={repo.name} 
                description={repo.description} 
                language={repo.language} 
                url={repo.clone_url} 
                homepage={repo.homepage} 
            />

        </div>
    )
}

export default Project