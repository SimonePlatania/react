import React from 'react'

class ProvaComponenteClasse3 extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            etaCustom: props.eta
        }
    }

    // Esempio aggiornamento etaCustom con 1 argomento
    // aggiungiAnno(eta){
    //     // Sbagliato
    //     // this.state.etaCustom = eta + 1;

    //     // Giusto
    //     this.setState({ etaCustom: eta + 1 })
    // }

    // Esempio aggiornamento etaCustom senza argomenti
    aggiungiAnno(){
        this.setState( (state) => ({
            etaCustom: state.etaCustom + 1
        }))
    }

    render(){
        const etaCustom = this.state.etaCustom;

        if(etaCustom && Number(etaCustom) > 0){
            if(Number(etaCustom) >= 18){
                return <h1 style={{color: "green"}}>Complimenti sei maggiorenne!</h1>
            } else {
                return  <>
                            <h1 style={{color: "red"}}>Spiacente sei ancora minorenne!</h1>
                            <button onClick={() => this.aggiungiAnno()}>Età +1</button>
                        </>
            }
        } else {
            return <h1 style={{color: "blue"}}>Inserisci la tua età</h1>
        }
    }
}

export default ProvaComponenteClasse3