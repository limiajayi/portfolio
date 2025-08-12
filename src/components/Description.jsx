import './Description.css'

const Links = ({url, homepage}) => {

    const showPage = (page) => {
        if (page === "" || page === null) {
        return false
        }
        return true
    }

    return (
        <div className="links">
            <div>
                <a href={url}>Github</a>
            </div>
            {showPage(homepage)? (<div> <a href={homepage}>Page</a> </div>) : ""}
        </div>
    )

}

const Description = ({ name, description, language, url, homepage }) => {

    return (
        <div className="description">
            <h4>
                {name}
            </h4>
            <div>
                {description}
            </div>
            <small>
                {language}
            </small>
            <Links url={url} homepage={homepage} />
        </div>
    )

}

export default Description