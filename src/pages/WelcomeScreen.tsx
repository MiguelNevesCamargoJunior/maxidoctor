import React from "react";
import { Link } from "react-router-dom";

export function WelcomeScreen() {
  return (
    <div className="welcomeContainer">
      <h1>Avaliação de Miguel Neves</h1>
      <Link to="/maxidoctor">
        <button type="button">Acessar MaxiDoctor</button>
      </Link>
    </div>
  );
}
