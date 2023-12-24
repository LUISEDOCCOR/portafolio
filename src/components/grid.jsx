import Card from "./card"
import '../stylesheets/grid.css'


const  Grid = (props) =>{
    return (
        <div className="container">
            <div className="conatiner-header">
                <h1>{props.title}</h1>
            </div>
            <div className="container-cards">
                {
                    props.cards.map((item) => (
                        <Card img={item.img} name={item.name} text={item.text} link={item.link} code={item.code} technologies={item.technologies} />
                    ))
                }             
            </div>
        </div>
    )
}

export default Grid