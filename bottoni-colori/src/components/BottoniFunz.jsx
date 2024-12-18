import React, { useState, useEffect } from "react";

function BottoniFunz() {
  const [color, setColor] = useState("green");
  const [intervalId, setIntervalId] = useState(null);

  const colorChange = () => {
    stopColorAlternation(); // Ferma eventuali alternanze
    setColor("blue"); // Imposta il colore blu
  };

  const stopColorAlternation = () => {
    if (intervalId) {
      clearInterval(intervalId); // Ferma l'intervallo
      setIntervalId(null); // Reset dell'ID
    }
  };

  const coloreAlternato = () => {
    if (intervalId) {
      stopColorAlternation(); // Ferma l'alternanza in corso
    } else {
      const newIntervalId = setInterval(() => {
        setColor((prevColor) =>
          prevColor === "orange" ? "white" : "orange"
        );
      }, 1000);
      setIntervalId(newIntervalId); // Memorizza il nuovo ID dell'intervallo
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor("red"); // Cambia il colore in rosso dopo 3 secondi
    }, 3000);

    return () => clearTimeout(timer); // Pulizia del timeout
  }, []);

  return (
    <div>
      <h1 style={{ color }}>Etichetta Colore</h1>
      <button type="button"
              onClick={colorChange} 
              style={{ marginRight: "20px" }}>BLU</button>
              
      <button type="button"
              onClick={coloreAlternato}>ALTERNATO</button>
    </div>
  );
}

export default BottoniFunz;
