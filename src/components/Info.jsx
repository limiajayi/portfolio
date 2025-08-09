

const Work = () => {

    return (
        <div className="work window">
            <img src="/work.svg" alt="" className="svg"/>
            <div className="content workContent">
                <h3>
                    Work Experience
                </h3>
            </div>
        </div>
    )
}

const About = () => {

    return (
        <div className="about window">
            <img src="/about.svg" alt="" className="svg" />
            <div className="content aboutContent">
                <h3>
                    About
                </h3>
            </div>
        </div>
    )
}

const Info = () => {
    return (
        <div className="Info">
            <About />
            <Work />
        </div>
    )
}

export default Info