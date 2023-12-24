import '../stylesheets/nav.css'
import { FaGithub } from "react-icons/fa";



const Nav = () => {
    return (
        <nav>
            <div className='container-nav'>
                <span className='nav-item'>Luis Eduardo Ocegueda Cortes</span>
                <ul className="nav-container-ul">
                    <li className="nav-li">
                        <a className="nav-a nav-item" href="">Proyectos</a>
                    </li>
                    <li className="nav-li">
                        <a className="nav-a nav-item" href="" >Contacto</a>
                    </li>
                    <li>
                        <a href="" className='nav-a nav-item'><FaGithub className='icon-github'/></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav