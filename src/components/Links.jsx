import './styles/Links.css'

const Links = () => {
    return (
        <div className="bottomLinks">
            <div className="linksContainer">
                <a href="https://github.com/limiajayi">
                    <img src="github.svg" alt="The Github Logo" />
                </a>
                <a href="https://www.linkedin.com/in/temi-a-70108a28a/">
                    <img src="linkedin.svg" alt="The LinkedIn Logo" />
                </a>
                <a href="mailto:limiajayi@gmail.com">
                    <img src="email.svg" alt="" />
                </a>
                <a href="TemiAjayi.pdf" download>
                    <img src="cv-icon.svg" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Links