import './styles/Home.css'
import Bar from './Bar'
import AboutContainer from './AboutContainer'
import WorkContainer from './WorkContainer'

const Work = () => {
    return (
        <div className="work border">
            <Bar text={"Work Experience"} color={"purple"} />
            <WorkContainer />
        </div>
    )
}

const About = () => {
    return (
        <div className="about border">
            <Bar text={"About"} color={"pink"}/>
            <AboutContainer />
        </div>
    )
}

const Home = () => {
    return (
        <div className='home' id='home' >
            <About />
            <Work />
        </div>
    )
}

export default Home