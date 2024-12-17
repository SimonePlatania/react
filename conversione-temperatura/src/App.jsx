import './App.css'
import CalcolaEbollizione from './components/esercizio1/CalcolaEbolizzione'
import Calcolatore from './components/esercizio2/Calcolatore'
import Calcolatore2 from './components/esercizio3/Calcolatore2'

function App() {

  return (
    <>
     <header className="text-align-center">
        <h2>Prova 2</h2>
      </header>
      <nav className="text-align-center">
        <p>Prova NAV</p>
      </nav>
      <body className="App-body">

        {/* 1) Esercizio calcolo ebollizione */}
        {/* <CalcolaEbollizione /> */}

        {/* 2) Esercizio conversione temperatura */}
        {/* <Calcolatore /> */}
        <Calcolatore2 />

      </body>
      <footer className="text-align-center">
        <h3>Developed by @Exolab</h3>
      </footer>
    </>
  )
}

export default App
