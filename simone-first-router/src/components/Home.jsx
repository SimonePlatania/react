import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '/src/css/stile.css'

function Home () {
    const navigate = useNavigate()

    const vaiALista = (route) => {
        navigate(route)
    }
    const vaiAdAggiungi = (route) => {
        navigate(route)
    }


    return (
        <>
            <h1>Inserimento prodotti</h1>
            <div>
                <button className="button button-green border-radius 50" onClick={() => vaiALista('/lista')}>LISTA ARTICOLI</button><br />
                <button className="button button-green border-radius 50" onClick={() => vaiAdAggiungi('/aggiungi')}>AGGIUNGI PRODOTTO</button>
            </div>
        </>
    )
}

export default Home