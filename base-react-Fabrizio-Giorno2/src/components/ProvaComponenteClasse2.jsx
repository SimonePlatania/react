import React from 'react'

class ProvaComponenteClasse2 extends React.Component {
    render(){
        const eta = this.props.eta;

        if(eta && Number(eta) > 0){
            if(Number(eta) >= 18){
                return <h1 style={{color: "green"}}>Complimenti sei maggiorenne!</h1>
            } else {
                return <h1 style={{color: "red"}}>Spiacente sei ancora minorenne!</h1>
            }
        } else {
            return <h1 style={{color: "blue"}}>Inserisci la tua età</h1>
        }
    }
}

export default ProvaComponenteClasse2