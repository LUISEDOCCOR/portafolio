import '../stylesheets/nav.css'
import { FaGithub } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5"
import { useState } from 'react';

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
        'to': 'https://github.com/LUISEDOCCOR'
    }
]


const Nav = () => {
    
    const [stateNav, setStateNav] = useState(false)

    const hideNav = () =>{
         if (stateNav){
            setStateNav(false)
         }else{
            setStateNav(true)
         }
    }
    
    return (
        <>
            <nav className='mobile-nav'>
                <div className='mobile-nav-container'>
                    <a className='nav-item mobile-name' href='/'>Luis Eduardo Ocegueda Cortes</a>
                    <button onClick={hideNav}>{stateNav ? (<IoCloseCircle/>) : (<IoMdMenu/>) }</button>
                </div>
            </nav>
            <nav className={`desktop-nav ${stateNav ? '' : 'desktop-nav-remove'}`.trim()}>
                <div className='container-nav'>
                    <a className='nav-item desktop-name' href='/'>Luis Eduardo Ocegueda Cortes</a>
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
        </>
    )
}

export default Nav