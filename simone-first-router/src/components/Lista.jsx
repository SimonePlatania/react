import { useNavigate } from "react-router-dom";


function Lista({ listaProdotti }) {

    const navigate = useNavigate()

    const vaiAdHome = (route) => {
        navigate(route)
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Lista prodotti</h2>
            {listaProdotti && listaProdotti.length > 0 ? (
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Indice</th>
                            <th className="border p-2">Nome</th>
                            <th className="border p-2">Prezzo</th>
                            <th className="border p-2">Marca</th>
                            <th className="border p-2">Scadenza</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProdotti.map((prodotto, index) => (
                            <tr key={index} className="border">
                                <td className="border p-2">{index + 1}</td>
                                <td className="border p-2">{prodotto.nome}</td>
                                <td className="border p-2">{prodotto.prezzo}€</td>
                                <td className="border p-2">{prodotto.marca}</td>
                                <td className="border p-2">{prodotto.scadenza}</td>
                            </tr>

                            
                        ))}
                    </tbody><br></br>
                    
                </table>
            ) : (
                <p className="text-gray-500">Nessun prodotto inserito</p>
            )}
                <button className="button button-green border-radius 50" onClick={() => vaiAdHome('/home')}>TORNA ALLA HOME</button>
                </div>
                

    );
}

export default Lista;