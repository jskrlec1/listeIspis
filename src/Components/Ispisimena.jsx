import React from "react";
import Button from "react-bootstrap/Button";

// Komponenta Ispisimena koja prima listu kao prop
const Ispisimena = ({ listaImena }) => {
  return (
    <div>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>

      <h2>Popis imena</h2>
      <ul>
        {/* Ispisivanje elemenata liste */}
        {listaImena.map((ime) => (
          <li key={crypto.randomUUID()}>{ime}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ispisimena;
