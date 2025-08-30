import { useEffect, useState, type FC } from 'react'
import '../styles/Work.css'
import Bar from './Bar'

const fileName: string = 'workExperience.txt'

const Work: FC = () => {

    const [works, setWorks] = useState<string>("")

    const fetchTextFile = async (): Promise<void> => {
        try {
            //fetch the file full of my work experience
            const response: Response = await fetch(fileName)
            const text: string = await response.text()

            setWorks(text)
            
        } catch (error) {
            console.log("Error loading file: ", error)
        }
    }

    useEffect(() => {fetchTextFile()}, [])

    const arr: string[] = works.split(/\r\n\r\n/)

    return (
        <div className="work border">
            <Bar text={"Work Experience"} color={"purple"} />
            {arr.length > 0 && arr[0].length > 0 ? arr[0] : ""}
        </div>
    )
}

export default Work