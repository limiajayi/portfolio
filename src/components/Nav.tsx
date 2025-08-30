import { type FC } from "react"
import '../styles/Nav.css'

const Nav: FC = () => {
    return (
        <nav className="navbar">
            
            <div className="text-links">
                <div className="link">
                    <a href="">
                        Temi Ajayi
                    </a>
                </div>
                <div className="link">
                    <a href="">
                        Projects
                    </a>
                </div>
            </div>

            <div className="img-link">
                <div className="link">
                    <a href="https://github.com/limiajayi">
                        <img src="github.svg" alt="The Github Logo" />
                    </a>
                </div>
                <div className="link">
                    <a href="https://www.linkedin.com/in/temi-a-70108a28a/">
                        <img src="linkedin.svg" alt="The LinkedIn Logo" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav