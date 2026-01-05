//import type { DescriptionProps } from '../../App.types'
import { useContext, type FC } from 'react'
import '../../styles/Description.css'
import ProjectLinks from './ProjectLinks'
import { ProjectContext } from './ProjectContext'

const Description: FC = () => {

    const { name, description, language } = useContext(ProjectContext)!

    return (
        <div className='description'>
            <div className='projectName'>
                {name.replaceAll("-", " ")}
            </div>
            <div>
                {description}
            </div>
            <small>
                {language}
            </small>
            <ProjectLinks />
        </div>
    )
}

export default Description