import { useEffect, useState, type FC } from 'react'
import '../styles/Work.css'
import Bar from './Bar'
import type { WorkExperienceProps } from '../App.types'

const fileName: string = 'workExperience.txt'

const WorkExperience: FC<WorkExperienceProps> = ({ workLines }) => {
    const [selected, setSelected] = useState<number>(0)

    return (
        <div>
            { workLines[selected] }
        </div>
    )


}

const Work: FC = () => {

    const [works, setWorks] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchTextFile = async (): Promise<void> => {
        setIsLoading(true)
        try {
            //fetch the file full of my work experience
            const response: Response = await fetch(fileName)
            const text: string = await response.text()

            //replaces the carriage every \r\n with \n for formatting and deploying reasons
            const editText: string = text.replace(/\r\n\r\n/g, "\n\n")
            const newText: string = editText.replace(/\r\n/g, "\n")

            setWorks(newText)
            
        } catch (error) {
            console.log("Error loading file: ", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {fetchTextFile()}, [])

    const workLines = works.split(/\n\n/)
    const newLines = workLines.map(line => line.split(/\n/))

    console.log(newLines)

    return (
        <div className="work border">
            <Bar text={"Work Experience"} color={"purple"} />
    
            {isLoading && newLines.length > 0 && newLines[0].length > 0 ? 
            <div>Loading...</div> : <WorkExperience workLines={newLines} />} 
        </div>
    )
}

export default Work