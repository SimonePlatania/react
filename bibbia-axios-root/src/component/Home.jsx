import { useNavigate } from "react-router-dom"

function Home(){
    const navigate = useNavigate()

    const vaiAPagina = (route) => {
        navigate(route)
    }

    return (
        <>
            <h1>Home</h1>

            <br />

            <button className="button button-green border-radius-50" onClick={() => vaiAPagina('/pokedex')}>
                Pokedex
            </button>

            <br />
        </>
    )
}

export default Home