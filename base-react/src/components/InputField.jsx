import React, { Component } from "react";

class InputField extends Component {
  state = { text: "" };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Scrivi qualcosa"
        />
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}

export default InputField;
