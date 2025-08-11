import './Bar.css'

const Bar = ({ text }) => {
    return (
        <div className="bar">
            <div>
                { text }
            </div>
        </div>
    )
}

export default Bar