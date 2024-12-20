// Dettaglio.jsx
import { useNavigate, useParams } from "react-router-dom"

function Dettaglio({ prodotti }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const prodotto = prodotti[id];

    const tornaIndietro = () => {
        navigate('/lista');
    }

    if (!prodotto) {
        return <div>Prodotto non trovato</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">DETTAGLIO PRODOTTO</h1>

            <table className="w-full border-collapse mb-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">Campo</th>
                        <th className="border p-2">Valore</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2 font-bold">Nome</td>
                        <td className="border p-2">{prodotto.nome}</td>
                    </tr>
                    <tr>
                        <td className="border p-2 font-bold">Prezzo</td>
                        <td className="border p-2">{prodotto.prezzo}€</td>
                    </tr>
                    <tr>
                        <td className="border p-2 font-bold">Marca</td>
                        <td className="border p-2">{prodotto.marca}</td>
                    </tr>
                    <tr>
                        <td className="border p-2 font-bold">Scadenza</td>
                        <td className="border p-2">{prodotto.scadenza}</td>
                    </tr>
                </tbody>
            </table>

            <button 
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={tornaIndietro}
            >
                INDIETRO
            </button>
        </div>
    );
}

export default Dettaglio