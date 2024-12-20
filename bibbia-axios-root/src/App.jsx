import Pokedex from './component/Pokedex'
import './App.css'
import './Table.css'
import Home from './component/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/pokedex', element: <Pokedex /> }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <h2>POKEDEX</h2>
      </header>
      <div className="App-body">
        <RouterProvider router={router} />
      </div>
      <footer className="App-footer">
        <h4>Developed by @Exolab</h4>
      </footer>
    </div>
  )
}

export default App
