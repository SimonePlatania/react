import { Component } from "react";

class CalcolaEbolizione extends Component {

    constructor(props) {
        super(props)

        this.state = {
            temperatura: ''
        }
    }

    handleChange(e) {
        const nuovoValore = e.target.value
        this.setState({
            temperatura: e.target.value
        })
    }

    render() {
        return (
            <>
                <fieldset>
                    <legend>Inserisci la temperatura in gradi Celsius:</legend>
                    <input value={this.state.temperatura} type="text" onChange={(e) => this.handleChange(e)} />
                    {this.state.temperatura >= 100 ? <p>L'acqua bollirebbe</p> : <p>L'acqua non bollirebbe</p>}
                </fieldset >
            </>
        )
    }
}

export default CalcolaEbolizione