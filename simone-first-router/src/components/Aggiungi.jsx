import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Aggiungi({ aggiungiProdotto }) {
    const [prodotto, setProdotto] = useState({
        nome: '',
        prezzo: '',
        marca: '',
        scadenza: ''
    });

    const navigate = useNavigate()
    const vaiALista = (route) => {
    navigate(route)
}


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProdotto({ ...prodotto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (prodotto.nome && prodotto.prezzo && prodotto.marca && prodotto.scadenza) {
            aggiungiProdotto(prodotto);  
            setProdotto({ nome: '', prezzo: '', marca: '', scadenza: '' });
            navigate('/lista'); 
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Aggiungi prodotto</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        value={prodotto.nome}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="prezzo"
                        placeholder="Prezzo"
                        value={prodotto.prezzo}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="marca"
                        placeholder="Marca"
                        value={prodotto.marca}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <input
                        type="date"
                        name="scadenza"
                        placeholder="Scadenza"
                        value={prodotto.scadenza}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    value="submit">
                    Aggiungi
                </button>
                <button className="button button-green border-radius 50" onClick={() => vaiALista('/lista')}>LISTA PRODOTTI</button>

            </form>
        </div>
    );
}

export default Aggiungi;
