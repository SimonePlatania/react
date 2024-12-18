import React, { useState, useEffect } from "react";

function Bottoni() {
  const [color, setColor] = useState("green");
  const [intervalId, setIntervalId] = useState(null);

  // Funzione per cambiare il colore a blu
  const changeColor = () => {
    stopColorAlternation(); // Ferma il cambio alternato
    setColor("blue"); // Imposta il colore a blu
  };

  // Funzione per alternare il colore
  const coloreAlternato = () => {
    if (intervalId) {
      stopColorAlternation(); // Se già in alternanza, ferma
    } else {
      const newIntervalId = setInterval(() => {
        setColor((prevColor) => (prevColor === "orange" ? "white" : "orange"));
      }, 1000); // Alterna i colori ogni secondo
      setIntervalId(newIntervalId); // Salva l'ID dell'intervallo
    }
  };

  // Funzione per fermare il cambio alternato
  const stopColorAlternation = () => {
    if (intervalId) {
      clearInterval(intervalId); // Pulisce l'intervallo
      setIntervalId(null); // Resetta l'ID
    }
  };

  // Effetto per cambiare il colore in rosso dopo 3 secondi
  useEffect(() => {
    const timer = setTimeout(() => {
      setColor("red");
    }, 3000);

    return () => clearTimeout(timer); // Pulisce il timeout al termine
  }, []);

  // Ritorno del componente
  return (
    <div>
      <h1 style={{ color }}>Etichetta colorata</h1>
      <button type="button" onClick={changeColor} style={{ marginRight: "20px" }}>
        Cambia di blu
      </button>
      <button type="button" onClick={coloreAlternato}>
        Cambio alternato
      </button>
    </div>
  );
}

export default Bottoni;
