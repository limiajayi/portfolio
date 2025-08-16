import './styles/Nav.css'
import Links from './Links'

const Nav = () => {
    return (
        <nav className="navbar">
            <div>
                <a href="#">Temi Ajayi</a>
            </div>
            <div>
                <a href="#">Home</a>
            </div>
            <div>
                <a href="#projects">Projects</a>
            </div>
            <div>
                <a href="#">Skills</a>
            </div>

            <Links />
        </nav>
    )
}

export default Nav