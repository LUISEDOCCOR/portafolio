import Grid from "../../components/grid";
import { FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';


const proyects = [
    {   
        'name': 'Calculadora con React',
        'text': 'Calculadora React: Simple y eficiente para operaciones matemáticas básicas en la web.',
        'link': 'https://reactappcalculadora.netlify.app/',
        'code': 'https://github.com/LUISEDOCCOR/react-calculator',
        'technologies':[
            <FaHtml5 style={{color: '#ef652a'}} className='icon-skills' />,
            <FaCss3 style={{color: '#2862e9'}} className='icon-skills' />,
            <IoLogoJavascript style={{color: '#f7e025'}} className='icon-skills' />,
            <FaReact style={{color: '#61dafb'}} className='icon-skills' />     
        ] 
    },
    {   
        'name': 'To Do App',
        'text': 'To-Do App con arrastrar y soltar (drag and drop) en Vanilla JavaScript:',
        'link': 'https://apptododragdrop.netlify.app/',
        'code': 'https://github.com/LUISEDOCCOR/app-to-do-drag-drop',
        'technologies':[
            <FaHtml5 style={{color: '#ef652a'}} className='icon-skills' />,
            <FaCss3 style={{color: '#2862e9'}} className='icon-skills' />,
            <IoLogoJavascript style={{color: '#f7e025'}} className='icon-skills' />,
        ] 
    },
    {   
        'name': 'To Do App React',
        'text': 'To-Do App en React con uso de useState, useEffect y Local Storage',
        'link': 'https://luisedoccortodoappreact.netlify.app',
        'code': 'https://github.com/LUISEDOCCOR/to-do-app-react',
        'technologies':[
            <FaHtml5 style={{color: '#ef652a'}} className='icon-skills' />,
            <FaCss3 style={{color: '#2862e9'}} className='icon-skills' />,
            <IoLogoJavascript style={{color: '#f7e025'}} className='icon-skills' />,
            <FaReact style={{color: '#61dafb'}} className='icon-skills' />     
        ] 
    },
    {   
        'name': 'Página con Bootstrap',
        'text': 'Diseño completo con Bootstrap para una experiencia visual atractiva y funcional.',
        'link': 'https://equipouno.netlify.app',
        'code': 'https://github.com/LUISEDOCCOR/Matematicaspage',
        'technologies':[
            <FaHtml5 style={{color: '#ef652a'}} className='icon-skills' />,
            <FaCss3 style={{color: '#2862e9'}} className='icon-skills' />,
            <FaBootstrap style={{color: '#870afb'}} className='icon-skills' />
        ]    
    },
    {   
        'name': 'Tic Tac Toe',
        'text': 'Implementación del clásico juego de tres en línea utilizando HTML, CSS y JavaScript.',
        'link': 'https://tictactoegamebyjs.netlify.app/',
        'code': 'https://github.com/LUISEDOCCOR/Tic-Tac-Toe-Js',
        'technologies':[
            <FaHtml5 style={{color: '#ef652a'}} className='icon-skills' />,
            <FaCss3 style={{color: '#2862e9'}} className='icon-skills' />,
            <IoLogoJavascript style={{color: '#f7e025'}} className='icon-skills' />,
        ] 

    }  
]


const Projects = () => {
    return (
        <Grid title='Proyectos 👾' cards={proyects}/>
    )
}

export default Projects