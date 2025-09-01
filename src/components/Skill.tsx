import Bar from "./Bar"
import '../styles/Skill.css'

const Skill = () => {
    return (
        <div className="skill border">
            <Bar text={"Skills"} color={"pink"} />
            <div className="skillContainer">
            Some languages, frameworks and software I've been working with:
            <div className="list">
                <div className="languages">
                    <ul>
                        <li>Python</li>
                        <li>Javascript ES6+</li>
                        <li>Typescript</li>
                        <li>Java</li>
                    </ul>
                </div>

                <div className="frameworks">
                    <ul>
                        <li>React</li>
                        <li>Django</li>
                        <li>Figma</li>
                        <li>Git and Github</li>
                    </ul>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Skill