import { useEffect, useState, type FC } from 'react'
import '../styles/Work.css'
import Bar from './Bar'

const fileName: string = 'workExperience.txt'

const Work: FC = () => {

    const [works, setWorks] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchTextFile = async (): Promise<void> => {
        setIsLoading(true)
        try {
            //fetch the file full of my work experience
            const response: Response = await fetch(fileName)
            const text: string = await response.text()

            setWorks(text)
            
        } catch (error) {
            console.log("Error loading file: ", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {fetchTextFile()}, [])

    const workLines = works.split('\r\n\r\n')
    console.log(workLines)

    return (
        <div className="work border">
            <Bar text={"Work Experience"} color={"purple"} />
            <div>
                {workLines.map((line, index) => {
                    return <p key={index}>{line}</p>
                })}
            </div>
            {isLoading ? <div>Loading...</div> : ""}
        </div>
    )
}

export default Work