function ProvaComponente({nome}) {


        function rendiMaiuscolo(stringa) {
        return stringa.toUpperCase()
    }

    return<h2>Ciao, {rendiMaiuscolo(nome)}</h2>

}

export default ProvaComponente;