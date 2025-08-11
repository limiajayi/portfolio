import './Bar.css'

const Bar = ({ text, color }) => {
    return (
        <div className="bar">
            <div>
                { text }
            </div>
        </div>
    )
}

export default Bar