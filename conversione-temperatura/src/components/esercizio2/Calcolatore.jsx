import { Component } from "react";
import InputTemperatura from "./InputTemperatura";

class Calcolatore extends Component {
    render(){
        return (
            <>
                <InputTemperatura scala="c" />
                <InputTemperatura scala="f" />
            </>
        )
    }
}

export default Calcolatore