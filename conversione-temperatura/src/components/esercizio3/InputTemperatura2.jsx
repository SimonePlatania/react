/* eslint-disable react/prop-types */
import { Component } from "react";

const scale = {
    c: "Celsius", 
    f: "Fahrenheit"
}

class InputTemperatura2 extends Component {

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.onChangeTemperatura(e.target.value)
    }

    render(){
        const temperatura = this.props.temperatura
        const scala = this.props.scala

        return (
            <fieldset>
                <legend>Inserisci la temperatura in gradi {scale[scala]}: </legend>
                <input type="text" value={temperatura} onChange={(e) => this.handleChange(e)} />
            </fieldset>
        )
    }
}

export default InputTemperatura2