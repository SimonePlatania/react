import { useNavigate } from "react-router-dom"

function Home () {

    const navigate = useNavigate()

    const aggiungiProdotto = (route) => {
        navigate(route)
    }
    const vaiALista = (route) => {
        navigate(route)
    }

    return (
        <>
        <h1>Aggiungi prodotto</h1><br/><br/><br/><hr/>
            <div>
                <button onClick ={() => aggiungiProdotto('/aggiungi')}>Aggiungi prodotto</button>
                <button onClick = {()=> vaiALista ('lista')}>Vai a lista</button>
            </div>
        </>
    )


}

export default Home