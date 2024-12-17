import { Component } from "react";

class Calcolatore extends Component {

    constructor(props) {
        super(props)

        this.state = {
            temperatura: ''
            scala: 'c'
        }
    }

    handleChangeCelsius(temperatura) {

    }

    handleChangeFahreneheit(temperatura) {

    }

    render() {
        const temperatura = this.state.temperatura
        
        return (
            <>
                <InputTemperatura scala="c"
                                  temperatura = {temperatura}
                                  onChangeTemperatura = {this.handleChangeCelsius}/>
                <InputTemperatura scala="f" 
                                  temperatura = {temperatura}
                                  onChangeTemperatura = {this.handleChangeFahreneheit} />
            
            </>
        )
    }

}

export default Calcolatore