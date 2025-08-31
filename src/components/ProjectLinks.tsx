import type { FC } from 'react'
import '../styles/ProjectLinks.css'
import type { ProjectLinksProps } from '../App.types'

const ProjectLinks: FC<ProjectLinksProps> = ({ url, homepage }) => {

    //not every project repository has been deployed
    //heres a function that decides to show or not show a repo
    //based on if the page is valid !!
    const showPage = (page: string | null | undefined) => {
        if (page === "" || page === null) {
            return false
        }
        return true
    }

    return (
        <div className='projectLinks'>
            <div>
                <a href={url}>Github</a>
            </div>
            {showPage(homepage) ? <div> <a href={homepage}>Page</a></div> : ""}
        </div>
    )
}

export default ProjectLinks