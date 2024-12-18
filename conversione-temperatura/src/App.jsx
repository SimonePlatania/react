import './App.css'
// import CalcolaEbollizioneFunz from './components/esercizio1/CalcolaEbolizzioneFunz'
import Calcolatore2Funz from './components/esercizio3/Calcolatore2Funz'

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
        {/* <CalcolaEbollizioneFunz/> */}
        <Calcolatore2Funz/>
      </body>

      <footer className="text-align-center">
        <h3>Developed by @Exolab</h3>
      </footer>
    </>
  )
}

export default App
