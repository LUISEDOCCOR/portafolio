import { FaGithub, FaLink } from "react-icons/fa";
import '../stylesheets/card.css'

const Card = (props) => {
    return (
        <div className="card" >
            {props.img ? (<img className="img-card" src={props.img} alt="img-card" />) : ''}
            <div className="conatiner-card">
                <h3>{props.name}</h3>
                <p>{props.text}</p>
                <div className="conatiner-links">
                    <a href={props.link}> <FaLink/> </a>
                    {props.code ? (<a href={props.code}><FaGithub/></a>) : ''}
                </div>
                <div className="continer-technologies"> 
                    {props.technologies}
                </div>
            </div>
        </div>
    )
}

export default Card