import './styles/Nav.css'
import Links from './Links'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className='textLink'>
                <a href="#home">Temi Ajayi</a>
            </div>
            <div className='textLink'>
                <a href="#projects">Projects</a>
            </div>

            <Links />
        </nav>
    )
}

export default Nav