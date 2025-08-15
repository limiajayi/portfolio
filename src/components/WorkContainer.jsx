import { useState, useEffect } from 'react'
import './styles/WorkContainer.css'

const filename = 'workExperience.txt'

const WorkContent = ({ workArray }) => {

    //const lines = workArray[0].split(/\r\n/) 
    return (
        <div>
            {workArray[0]}
        </div>
    )
}


const FileLoader = () => {
    const [works, setWorks] = useState([])

    const arr = []

    useEffect(() => {
        const fetchTextFile = async () => {
        try {
            //fetch the file full of my work experience
            const response = await fetch(filename)
            const text = await response.text()
            const who = text.split(/\r\n\r\n/)

            //convert it into an array of arrays based on my formatting in the file
            setWorks(who)
        } catch (error) {
            console.log("Error loading file: ", error)
        }
    }

        fetchTextFile()
    }, [])
    
    return (
    <div>
        ayo
        <WorkContent workArray={works} />
    </div>
)

}

const WorkContainer = () => {
    return (
        <div className="workContainer">
            <FileLoader />
        </div>
    )
}

export default WorkContainer