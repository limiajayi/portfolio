import './styles/Home.css'
import Bar from './Bar'
import AboutContainer from './AboutContainer'

const Work = () => {
    return (
        <div className="work border">
            <Bar text={"Work Experience"} color={"purple"} />
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
        <div className='home'>
            <About />
            <Work />
        </div>
    )
}

export default Home