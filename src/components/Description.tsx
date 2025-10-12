import type { DescriptionProps } from '../App.types'
import type { FC } from 'react'
import '../styles/Description.css'
import ProjectLinks from './ProjectLinks'

const Description: FC<DescriptionProps> = ({ name, description, language, url, homepage }) => {
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
            <ProjectLinks url={url} homepage={homepage} />
        </div>
    )
}

export default Description