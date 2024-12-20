import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Aggiungi ({aggiungiProdotto}) {

    const navigate = useNavigate()
    const [prodotto, setProdotto] = useState (
        {
            nome: '',
            prezzo: 0,
            marca: '',
            scadenza: null
        }
    );

    const vaiAllaHome = (route) => {
        navigate(route)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProdotto({...prodotto, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (prodotto.nome && prodotto.prezzo && prodotto.marca && prodotto.scadenza) {
            aggiungiProdotto(prodotto);
            setProdotto({nome: '', prezzo: 0, marca: '', scadenza: null})
            navigate('/lista');
        }
    }

    return (

        <div>
            <h2>Aggiungi prodotto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type = "text"
                        name = "nome"
                        placeholder="NOME"
                        value = {prodotto.nome}
                        onChange={handleChange}>
                    </input><br/>

                    <input
                        type = "number"
                        name = "prezzo"
                        placeholder="PREZZO"
                        value = {prodotto.prezzo}
                        onChange={handleChange}>
                        </input><br/>

                    <input
                        type = "text"
                        name = "marca"
                        placeholder="MARCA"
                        value = {prodotto.marca}
                        onChange={handleChange}>
                        </input><br/>

                    <input
                        type = "date"
                        name = "scadenza"
                        placeholder="SCADENZA"
                        value = {prodotto.scadenza}
                        onChange={handleChange}>
                    </input>

                    <button type = "submit" value = "submit">AGGIUNGI</button><br/><br/>
                    <button onClick={() => vaiAllaLista('/lista')}>LISTA PRODOTTI</button>
                </div>
            </form>
        </div>
    )


}

export default Aggiungi