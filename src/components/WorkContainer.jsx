import { useState, useEffect } from 'react'
import './styles/WorkContainer.css'

const filename = 'workExperience.txt'

const WorkContent = ({ className, workLine }) => {

    return (
        <div className={className}>
            <img src="workIcon.svg" alt="" />
            <div className="workInfo">
                <h4>
                    {workLine[0]}
                </h4>
                <div>
                    { workLine[1]}
                </div>
            </div>
        </div>
    )

}


const FileLoader = () => {
    const [works, setWorks] = useState([])

    useEffect(() => {
        const fetchTextFile = async () => {
        try {
            //fetch the file full of my work experience
            const response = await fetch(filename)
            const text = await response.text()
            const who = text.split(/\r\n\r\n/).filter(line => line.trim() !== '')

            setWorks(who)
        } catch (error) {
            console.log("Error loading file: ", error)
        }
    }

        fetchTextFile()
    }, [])

    //array of arrays
    const arr = works.map((line) => line.split(/\r\n/))
    
    return (
    <div className="workContainer">
        
        {arr.map((line) => {
            if (arr.indexOf(line) === 2) {
                return <WorkContent className={"workContent last"} key={line.length * Math.random()} workLine={line}/>
            }
            return (
                <WorkContent className={"workContent"} key={line.length * Math.random()} workLine={line}/>
            )
        })}

        {console.log(arr)}
        
    </div>
)

}

const WorkContainer = () => {
    return (
        <div>
            <FileLoader />
        </div>
    )
}

export default WorkContainer