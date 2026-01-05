import '../../styles/About.css'
import Bar from '../Bar'

const About = () => {
    return (
        <div className="about border">
            <Bar text={"About"} color={"pink"} />

            <div className="aboutContainer">
                <div className="meImage">
                    <img src="me.jpg" alt="" className='border' />
                </div>
                <div className="textContainer">
                    <p>
                        Hi, I'm Temi
                    </p>
                    <div>
                        I build full-stack solutions out of personal problems. <br /><br />

                        Learned HTML, CSS and Javascript out of curiousity during lockdown. 
                        Now I'm pursuing a Computer Science degree at the University of Birmingham, 
                        where I make prototypes by day and obsess over Figma wireframes by night. <br /><br />
                        
                        Offline, I'm doodling comics, switching between crochet projects and taking pictures of the mundane.
                </div>
            </div>
        </div>
        </div>
    )
}

export default About