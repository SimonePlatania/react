import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';  // Aggiungi eventualmente altri file CSS globali
import Home from './components/Home';  // Home è correttamente importato
import Aggiungi from './components/Aggiungi';  // Assicurati di importarlo
import Lista from './components/Lista';  // Importa anche Lista

function App() {

  const [prodotti, setProdotti] = useState([]);

  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/lista', element: <Lista /> },
    { path: '/aggiungi', element: <Aggiungi /> },
  ]);

  return (
    <>
      <h1>Aggiungi prodotto</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
