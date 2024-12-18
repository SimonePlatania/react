import React, { Component } from "react";
import { useState } from "react";

function ChangeColor () {

    const [color, setColor] = useState ('black');

  const changeColor = () => {
    const colors = ["red", "green", "blue", "purple"];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(newColor);
  };

    return (
      <div>
        <h1 style={{ color: color }} onClick={changeColor}>
          Cliccami per cambiare colore!
        </h1>
      </div>
    );
  }

export default ChangeColor;
