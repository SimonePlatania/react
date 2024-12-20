import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Pokedex(){
    const [listaPokemon, setListaPokemon] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getListaPokemon()
    }, [])

    // Esempio fetch
    // const getListaPokemon = () => {
    //     fetch('https://pokeapi.co/api/v2/pokemon')
    //         .then(responseObj => responseObj.json())
    //         .then((response) => {
    //             setListaPokemon(response.results)
    //         })
    //         .catch(err => console.log('Errore generico', err))
    // }

    // Esempio axios
    const getListaPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then( (response) => {
            if(response.status === 200){
                setListaPokemon(response.data.results)
            } else {
                alert('Si è verificato un errore imprevisto!')
            }
        })
    }

    const vaiAPagina = (route) => {
        navigate(route)
    }

    return (
        <>
            <h2>Lista pokemon</h2>

            {listaPokemon && listaPokemon.length > 0 ? 
                <table id="tabellaSerie">
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
                                <tr key={index + 1}>
                                    <td className="text-center">{index + 1}</td>
                                    <td className="text-center">{pokemon.name}</td>
                                    <td className="text-center">
                                        <a href={pokemon.url} target="_blank">
                                            {pokemon.url}
                                        </a>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                : 
                <p>Nessun pokemon da mostrare</p>                
            }

           <br />

           <button className="button button-green border-radius-50" onClick={() => vaiAPagina('/')}>
                Indietro
           </button>

           <br />
        </>
    )
}

export default Pokedex