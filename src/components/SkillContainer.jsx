import './styles/SkillContainer.css'

const SkillContainer = () => {
    return (
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
                        <li>Git / Github / Version Control</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default SkillContainer