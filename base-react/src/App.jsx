import './App.css'
import ProvaComponente from './compontens/provaComponente'
import ProvaComponenteClasse from './compontens/ProvaComponenteClasse'

function App() {
  const nome = "Flavia"

  return (

    <>

      <ProvaComponente />
      <ProvaComponenteClasse nome = {nome} />
    
    </>
    
  )
}

export default App
