import { Component } from "react";

const scale = {
    c: "Celsius", 
    f: "Fahrenheit"
}

class InputTemperatura extends Component {

    constructor(props){
        super(props)

        this.state = {
            temperatura: ''
        }
    }

    handleChange(e){
        this.setState({
            temperatura: e.target.value
        })
    }

    render(){
        const scala = this.props.scala

        return (
            <fieldset>
                <legend>Inserisci la temperatura in gradi {scale[scala]}: </legend>
                <input type="text" value={this.state.temperatura} onChange={(e) => this.handleChange(e)} />
            </fieldset>
        )
    }
}

export default InputTemperatura