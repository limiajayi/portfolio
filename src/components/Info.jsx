
const Work = () => {

    return (
        <div className="work">
            
        </div>
    )
}

const About = () => {

    return (
        <div className="about">
            <div className="rect aboutRect">
                <div className="bar aboutBar">
                    <h3>About</h3>
                </div>

                <div className="aboutContent">
                    <img src="/me.jpg" alt="A picture of me" />
                    <div className="aboutText">
                        <h4>Temi Ajayi</h4>
                        <p>
                            Junior Developer interested in full stack development and AI !!!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

const Info = () => {
    return (
        <div className="Info">
            <About />
            <p>HIII IM INFO</p>
        </div>
    )
}

export default Info