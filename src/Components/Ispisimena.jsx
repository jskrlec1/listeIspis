import React from "react";


// Komponenta Ispisimena koja prima listu kao prop
const Ispisimena = ({ listaImena }) => {
  return (
    <div>
      

      <h2>Popis imena</h2>
      <ul>
        
        {listaImena.map((ime) => (
          <li key={crypto.randomUUID()}>{ime}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ispisimena;

