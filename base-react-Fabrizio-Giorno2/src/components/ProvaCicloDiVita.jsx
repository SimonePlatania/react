import { Component } from "react";

class ProvaCicloDiVita extends Component {
    constructor(props){
        super(props)

        this.state = {}

        console.log('Sono nel costruttore')
    }

    componentDidMount(){
        console.log('Sono nel componentDidMount')
    }

    render(){
        return <h2 style={{color: "green"}}>SONO NEL RENDER</h2>
    }
}

export default ProvaCicloDiVita