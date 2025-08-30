import type { FC } from 'react'
import type { BarProps } from '../App.types'
import '../styles/Bar.css'

const Bar:FC<BarProps> = ({ text, color }) => {

    const handleColor = () => {
        if ( color === "pink" ) {
            return {
                backgroundColor: "var(--pink)"
            }
        }
        return {
                backgroundColor: "var(--purple)"
            }
    }

    return (
        <div className='bar' style={handleColor()}>
            <div className="barContainer">
                <div className="barHeading">
                    { text }
                </div>

                <div className="barImage">
                    <img src="/controlButtons.svg" alt="control buttons" />
                </div>
            </div>
        </div>
    )
}

export default Bar