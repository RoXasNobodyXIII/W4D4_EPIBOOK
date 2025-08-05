import React from "react";
import { Alert } from "react-bootstrap";

const Welcome = () => (
  <div className="container my-4">
    <Alert variant="info">
      Benvenuto su <strong>EpiBooks</strong>! Scopri la nostra selezione di libri.
    </Alert>
    <h1 className="text-center">EpiBooks</h1>
  </div>
);

export default Welcome;
