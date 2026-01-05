import { type FC, type PropsWithChildren } from 'react'
import type { DescriptionProps  } from '../../App.types'
import { ProjectContext } from './ProjectContext'


export const ProjectContextProvider: FC<PropsWithChildren<DescriptionProps>> = ({ 
    children,
    name,
    description,
    language,
    url,
    homepage}) => {
    return (
        <ProjectContext.Provider value={{ name, description, language, url, homepage }}>
            {children}
        </ProjectContext.Provider>
    )
}