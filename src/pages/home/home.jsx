import '../../stylesheets/home.css'
import { FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';


const Home = () =>{
    return(
        <div className="container">
            <div className="container-about-me">
                <h1>Luis Eduardo Ocegueda Cortes</h1>
                
                <p>¡Hola! 🖐 soy Luis Eduardo, programador frontend y backend.</p>
                
                <p>Programador autodidacta.</p>
                
                <p>Soy un entusiasta desarrollador web que 
                    se embarcó en su travesía durante la pandemia. 
                    Mi compromiso actual reside en continuar expandiendo 
                    mis conocimientos y evolucionar como profesional del desarrollo web. 
                    Estoy dedicado a cultivar una constante curiosidad y afrontar 
                    nuevos desafíos que me permitan crecer como desarrollador.
                </p>
            </div>
            <div className='conatiner-skills'>
                <FaHtml5 style={{color: '#ef652a'}} className='icon-skills' />
                <FaCss3 style={{color: '#2862e9'}} className='icon-skills' />
                <IoLogoJavascript style={{color: '#f7e025'}} className='icon-skills' />
                <FaReact style={{color: '#61dafb'}} className='icon-skills' />
                <FaBootstrap style={{color: '#870afb'}} className='icon-skills' />
                <FontAwesomeIcon icon={faPython} style={{color: '#3673a5'}} className='icon-skills'/>
            </div>
        </div>
    )
}

export default Home