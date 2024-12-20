import './App.css'
import './Table.css'
import Home from './components/Home'
import Aggiungi from './components/Aggiungi'
import Lista from './components/Lista'
import Dettaglio from './components/Dettaglio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '/src/css/stile.css'
import { useState } from 'react'

function App() {
  // Aggiungi lo state per i prodotti
  const [prodotti, setProdotti] = useState([]);

  const aggiungiProdotto = (nuovoProdotto) => {
    setProdotti(prevProdotti => [...prevProdotti, nuovoProdotto]);
  };

  const router = createBrowserRouter([
    { path: '/home', element: <Home/>},
    // Passa la funzione aggiungiProdotto come prop
    { path: '/aggiungi', element: <Aggiungi aggiungiProdotto={aggiungiProdotto}/>},
    // Passa l'array dei prodotti come prop
    { path: '/lista', element: <Lista listaProdotti={prodotti}/>},
    { path: '/dettaglio/:id', element: <Dettaglio prodotti={prodotti}/>}
  ])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-body">
        <RouterProvider router={router} />
      </div>
      <footer className="App-footer">
      </footer>
    </div>
  )
}

export default App