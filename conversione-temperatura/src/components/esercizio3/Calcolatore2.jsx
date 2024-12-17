import { Component } from "react";
import InputTemperatura2 from "./InputTemperatura2";
import { conversione, toCelsius, toFahrenheit } from "../../utility/utility";

class Calcolatore2 extends Component {

    constructor(props){
        super(props)

        this.state = {
            temperatura: '',
            scala: 'c'
        }

        this.handleChangeCelsius = this.handleChangeCelsius.bind(this)
        this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this)
    }

    handleChangeCelsius(temperatura){
        this.setState({
            scala: 'c',
            temperatura
        })
    }

    handleChangeFahrenheit(temperatura){
        this.setState({
            scala: 'f',
            temperatura
        })
    }

    render(){
        const scala = this.state.scala
        const temperatura = this.state.temperatura
        const celsius = (scala === 'f') ? conversione(temperatura, toCelsius) : temperatura
        const fahrenheit = (scala === 'c') ? conversione(temperatura, toFahrenheit) : temperatura

        return (
            <>
                <InputTemperatura2  scala="c" 
                                    temperatura={celsius}
                                    onChangeTemperatura={this.handleChangeCelsius} />
                <InputTemperatura2  scala="f" 
                                    temperatura={fahrenheit}
                                    onChangeTemperatura={this.handleChangeFahrenheit} />
            </>
        )
    }
}

export default Calcolatore2