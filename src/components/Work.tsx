import { useEffect, useState, type FC } from 'react'
import '../styles/Work.css'
import Bar from './Bar'

const fileName: string = 'workExperience.txt'

const Work: FC = () => {

    const [works, setWorks] = useState<string[]>([])

    const fetchTextFile = async (): Promise<void> => {
        try {
            //fetch the file full of my work experience
            const response: Response = await fetch(fileName)
            const text: string = await response.text()
            const newArray: string[] = text.split(/\r\n\r\n/).filter(line => line.trim() !== '')

            setWorks(newArray)
            
        } catch (error) {
            console.log("Error loading file: ", error)
        }
    }

    useEffect(() => {fetchTextFile()}, [])

    const arr: string[][] = works.map(line => line.split(/\r\n/))

    return (
        <div className="work border">
            <Bar text={"Work Experience"} color={"purple"} />
            {arr.length > 0 && arr[0].length > 0 ? arr[0][0] : ""}
        </div>
    )
}

export default Work