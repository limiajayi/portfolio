import Bar from "../Bar"
import '../../styles/Fun.css'

const Fun = () => {
    return (
        <div className="fun border">
            <Bar text={"Fun facts"} color={"purple"} />
            <div className='funContainer'>
            Here are some fun facts about me:
            <ul>
                <li>I've been into art and drawing since I was four</li>
                <li>I make a point to get a library card at every new city I visit!</li>
                <li>I'm into photography and taking pictures of everyday sights and objects.</li>
                <li>I have never missed leg day.</li>
            </ul>
        </div>
        </div>
    )
}

export default Fun