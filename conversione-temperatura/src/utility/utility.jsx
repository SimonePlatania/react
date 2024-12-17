// Converte una temperatura da fahrenheit a celsius
export function toCelsius( fahrenheit ) {
    return (fahrenheit - 32) * 5 / 9;
}

// Converte una temperatura da celsius a fahrenheit
export function toFahrenheit( celsius ) {
    return (celsius * 9 / 5) + 32;
}

// La funzione restituisce una stringa vuota per una temperatura non valida e arrotonda l’output alla terza cifra decimale
/* 
    Ad esempio, conversione('abc', toCelsius) restituisce una stringa vuota, 
    e conversione('10 .22', toFahrenheit) restituisce '50.396'. 
*/
export function conversione( temperatura, converti ) {
    const input = parseFloat(temperatura);

    if (Number.isNaN(input)) {
        return '';
    }

    const output = converti(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}