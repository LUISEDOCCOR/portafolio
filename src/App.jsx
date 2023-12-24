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
    path: '/sobremi',
    element:(
      <Home/>
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
