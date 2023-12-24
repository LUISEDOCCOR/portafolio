import './App.css'
import Nav from './components/nav.jsx'
import Home from './pages/home/home.jsx';
import Certifications from './pages/certifications/certifications.jsx';
import Projects from './pages/projects/projects.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const route = createBrowserRouter([
  {
    path: '/',
    element:(
      <Home/>
    )
  },
  {
    path: '/proyectos',
    element:(
      <Projects/>
    )
  },
  {
    path: '/certificaciones',
    element:(
      <Certifications/>
    )
  },
  {
    path: '/contacto',
    element: (
      <h1>Contacto</h1>
    )
  }
])


function App() {
  return (
      <>
        <Nav/>
        <RouterProvider router={route}/>
      </>
  )
}

export default App
