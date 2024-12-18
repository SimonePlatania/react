import { useState } from "react";
import InputTemperatura2Funz from "./InputTemperatura2Funz";
import { conversione, toCelsius, toFahrenheit } from "../../utility/utility";

function Calcolatore2Funz() {
    // Stati per gestire temperatura e scala
    const [temperatura, setTemperatura] = useState('');
    const [scala, setScala] = useState('c');

    const handleChangeCelsius = (nuovaTemperatura) => {
        setTemperatura(nuovaTemperatura);
        setScala('c');
    };

    const handleChangeFahrenheit = (nuovaTemperatura) => {
        setTemperatura(nuovaTemperatura);
        setScala('f');
    };

    return (
        <>
            <InputTemperatura2Funz
                scala="c"
                temperatura={(scala === 'f') ? conversione(temperatura, toCelsius) : temperatura}
                onChangeTemperatura={handleChangeCelsius}
            />
            <InputTemperatura2Funz
                scala="f"
                temperatura={(scala === 'c') ? conversione(temperatura, toFahrenheit) : temperatura}
                onChangeTemperatura={handleChangeFahrenheit}
            />
        </>
    );
}

export default Calcolatore2Funz;
