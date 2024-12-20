import axios from "axios"
import { useEffect, useState } from "react"

function Pokedex() {
    const [listaPokemon, setListaPokemon] = useState([])

    useEffect(() => {
        getListaPokemon()

    }, [])

    // //Prima con la fetch
    // const getListaPokemon = () => {  
    //     fetch('url')
    //     .then(responseObj => responseObj.json)
    //     .then((response) => {
    //         setListaPokemon(response.results)
    //     })
    //     .catch(err => console.log('Errore generico'))
    // }

    //Esempio Axios
    const getListaPokemon = () => {
        axios.get('http://pokeapi.co/api/v2/pokemon').then(response => {
            if (response.status == 200) {
                console.log(response.data.results)
            } else {
                alert("Si è verificato un errore imprevisto")
            }
        })
    }

    return (
        <>
            <h2>Lista Pokemon</h2>

            {listaPokemon && listaPokemon.length > 0 ?
            <table>
                <thead>
                    <tr>
                        <th>Indice</th>
                        <th>Nome</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaPokemon.map((pokemon, index) =>
                            <tr key={index}>
                                <td className="text-center">{index + 1}</td>
                                <td className="text-center">{pokemon.name}</td>
                                <td className="text-center">
                                    <a href={pokemon.url}>{pokemon.url}</a>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            : <p>nessun pokemon da mostrare</p>}
            <br></br>
        </>
    )

}

export default Pokedex