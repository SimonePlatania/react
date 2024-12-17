import React from "react";

class Bottoni extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "green" 
        };
    }

    changeColor = () => {
        this.setState({ color: "blue" }); 
    }

    coloreAlternato = () => {
        this.timer = setInterval(() => {
         this.setState(prevState => ({
             color: prevState.color === 'orange' ? 'white' : 'orange'
         }));
     }, 1000); 
 };
     stopColorAlternation = () => {
     clearInterval(this.timer);
     };
     
    handleChangeColor = (newColor) => {
        this.setState({
            color: newColor
        });
    }

    componentDidMount() {
        this.timer = setTimeout(
            () => this.handleChangeColor('red'), 1000 * 3
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
        clearInterval(this.interval);
    }
 
    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color}}>
                    Etichetta colorata
                </h1>
                <button type="button" onClick={this.changeColor}>
                    Cambia di blu
                </button>
                <button type="button" onClick={this.coloreAlternato}>
                    Cambio alternato
                </button>
            </div>
        );
    }
}

export default Bottoni;