import './Skills.css'
import Bar from './Bar'

const Fun = () => {
    return (
        <div className="funfacts border">
            <Bar text={"Fun Facts"} color={"purple"} />
            i bring the fun in
        </div>
    )
}

const Skill = () => {
    return (
        <div className="skill border">
            <Bar text={"Fun Facts"} color={"purple"} />
            yoooo im skills
        </div>
    )
}

const Skills = () => {
    return (
        <div className="skills">
            <Skill />
            <Fun />
        </div>
    )
}


export default Skills