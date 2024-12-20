import React, { Component } from "react";

class ToggleText extends Component {
  state = { isVisible: true };

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>Toggle Text</button>
        {this.state.isVisible && <p>Questo testo può essere nascosto.</p>}
      </div>
    );
  }
}

export default ToggleText;
