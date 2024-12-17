import React from "react";

class Bottoni extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "green", // Initial color
    };

    this.colorChange = this.colorChange.bind(this);
    this.coloreAlternato = this.coloreAlternato.bind(this);
    this.stopColorAlternation = this.stopColorAlternation.bind(this);
  }

  colorChange() {
    if (this.state.color !== "green") {
      // Stop any ongoing color alternation
      this.stopColorAlternation();

      this.setState({
        color: "blue",
      });
    }
  }

  coloreAlternato() {
    if (this.timer) {
      this.stopColorAlternation();
    }

    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        color: prevState.color === "orange" ? "white" : "orange",
      }));
    }, 1000);
  }

  stopColorAlternation() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "red" });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>Etichetta Colore</h1>
        <button type="button" onClick={this.colorChange} style = {{marginRight: '20px'}}>
          BLU
        </button>
        <button type="button" onClick={this.coloreAlternato}>
          ALTERNATO
        </button>
      </div>
    );
  }
}

export default Bottoni;
