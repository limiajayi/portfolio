import './styles/Skills.css'
import Bar from './Bar'
import SkillContainer from './SkillContainer'
import FunContainer from './FunContainer'

const Fun = () => {
    return (
        <div className="funfacts border">
            <Bar text={"Fun Facts"} color={"purple"} />
            <FunContainer />
        </div>
    )
}

const Skill = () => {
    return (
        <div className="skill border">
            <Bar text={"Stats"} color={"pink"} />
            <SkillContainer />
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