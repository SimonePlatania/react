import VerdettoEbollizione from "./VerdettoEbolizzione";
import { useState } from "react";

function CalcolaEbollizioneFunz() {
    const [temperatura, setTemperatura ] = useState('')

    const handleChange = (e) => {
        setTemperatura(e.target.value)

    }

        return (
            <fieldset>
                <legend>Inserisci la temperatura in gradi Celsius: </legend>

                <input type="text" value={temperatura} onChange= {handleChange}/>

                <VerdettoEbollizione temperaturaInserita={temperatura} />
            </fieldset>
        )
}

export default CalcolaEbollizioneFunz