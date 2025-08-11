import './Bar.css'

// --pink: rgba(246, 158, 196, 1);
//     --purple: rgba(161, 132, 186, 1);

const Bar = ({ text, color }) => {

    const handleColor = () => {
        if ( color === "pink") {
            return {
                backgroundColor: "rgba(246, 158, 196, 1)"
            }
        }
        return {
            backgroundColor: "rgba(161, 132, 186, 1)"
        }
    }

    return (
        <div className="bar" style={handleColor()}>
            <div>
                { text }
            </div>
        </div>
    )
}

export default Bar