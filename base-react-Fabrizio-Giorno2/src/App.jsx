import './App.css'
import ProvaComponenteClasse3 from './components/ProvaComponenteClasse3'
import ProvaComponente from './components/ProvaComponente'
import ProvaComponenteClasse from './components/ProvaComponenteClasse'
import ProvaComponenteClasse2 from './components/ProvaComponenteClasse2'
import ProvaCicloDiVita from './components/ProvaCicloDiVita'
import ProvaCicloDiVita2 from './components/ProvaCicloDiVita2'
import ClasseConCicloDiVita from './components/ClasseConCicloDiVita'

function App() {
  const nome = "Flavia"

  return (
    <>
      /* <ProvaComponente nome={nome} />
      <ProvaComponenteClasse nome={nome} /> 
      <ProvaComponenteClasse2 eta={21} /> 
      <ProvaComponenteClasse3 eta={12} />
      <ProvaCicloDiVita /> 
      <ProvaCicloDiVita2 />*/
      <ClasseConCicloDiVita/>
    </>
  )
}

export default App
