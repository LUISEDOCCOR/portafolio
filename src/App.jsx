import './App.css'
import Nav from './components/nav.jsx'
import Home from './pages/home/home.jsx';
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
      <h1>Proyectos</h1>
    )
  },
  {
    path: '/certificaciones',
    element:(
      <h1>Certificaciones</h1>
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
