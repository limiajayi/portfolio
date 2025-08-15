import './styles/Bar.css'

// --pink: rgba(246, 158, 196, 1);
//     --purple: rgba(161, 132, 186, 1);

const Bar = ({ text, color }) => {

    const handleColor = () => {
        if ( color === "pink") {
            return {
                backgroundColor: "var(--pink)"
            }
        }
        return {
            backgroundColor: "var(--purple)"
        }
    }

    return (
        <div className="bar" style={handleColor()}>
            <div className='barContainer'>
                <div className='barHeading'>
                    { text }
                </div>
                <div className="barImage">
                        <img src="mac-whatevr.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Bar