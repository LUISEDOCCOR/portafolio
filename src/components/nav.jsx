import '../stylesheets/nav.css'
import { FaGithub } from "react-icons/fa";

const pages = [
    {
        'name': 'Proyectos',
        'to': '/proyectos'
    },
    {
        'name': 'Certificaciones',
        'to': '/certificaciones'
    },
    {
        'name': 'Contacto',
        'to': '/contacto'
    },
    {
        'name': <FaGithub/>,
        'to': ''

    }
]


const Nav = () => {
    return (
        <nav>
            <div className='container-nav'>
                <span className='nav-item'>Luis Eduardo Ocegueda Cortes</span>
                <ul className="nav-container-ul">
                    {
                        pages.map((page) => (
                            <li className="nav-li">
                                <a className="nav-a nav-item" href={page.to}>{page.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Nav