import { Component } from "react";
import VerdettoEbollizione from "./VerdettoEbolizzione";

class CalcolaEbollizione extends Component {

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
        return (
            <fieldset>
                <legend>Inserisci la temperatura in gradi Celsius: </legend>

                <input type="text" value={this.state.temperatura} onChange={(e) => this.handleChange(e)} />

                <VerdettoEbollizione temperaturaInserita={this.state.temperatura} />
            </fieldset>
        )
    }
}

export default CalcolaEbollizione