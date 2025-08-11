import './Home.css'
import Bar from './Bar'

const Work = () => {
    return (
        <div className="work border">
            <Bar text={"Work Experience"} />
        </div>
    )
}

const About = () => {
    return (
        <div className="about border">
            <Bar text={"About"}/>
            
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