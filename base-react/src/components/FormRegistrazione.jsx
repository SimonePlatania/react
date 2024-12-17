import React, {useState} from 'react';
import ReactDOM from "react-dom/client"

function FormRegistrazione() {

    const [name, setName] = useState('');
    const handleNameChange = (e) => {
        setName (e.target.value);
    };

    return (
    <>
    <label htmlFor = 'utente'>Digita il tuo nome</label>
    <input id = "utente" type = "text" value = {name} onChange={handleNameChange}/>
    <h1>Ciao, {name}</h1>
    </>
    );
}

export default FormRegistrazione;