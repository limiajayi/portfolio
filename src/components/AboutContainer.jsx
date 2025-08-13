import './AboutContainer.css'

const AboutContainer = () => {

    return (
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
                    where I create startup prototypes by day and obsess over Figma wireframes by night. <br /><br />
                    
                    Offline, I'm doodling comics, switching between crochet projects and training in MMA.
                </div>
            </div>
        </div>
    )
}

export default AboutContainer