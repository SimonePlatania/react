import './App.css'
import ProvaComponente from './components/ProvaComponente'
import ProvaComponenteClasse from './components/ProvaComponenteClasse'

function App() {
  const nome = "Flavia"

  return (
    <>
      <ProvaComponente nome={nome} />
      <ProvaComponenteClasse nome={nome} />
    </>
  )
}

export default App
