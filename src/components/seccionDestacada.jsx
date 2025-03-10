import React from "react";
import "../css/seccionDestacada.css";
import Modelo3D from "./modelo3DPrincipal";

const SeccionDestacada = () => {
  return (
    <div className="destacada-container">
      <div className="destacada-content">
        <h2>El tiempo de los Dioses, en tus manos</h2>
        <p>Descubre relojes inspirados en la grandeza de la mitología griega. Diseños únicos que capturan el poder, la elegancia y la eternidad de los dioses en cada detalle.</p>
        <button className="btn-destacada">Ver Colección</button>
      </div>
      <div className="destacada-image">
        <Modelo3D />
      </div>
    </div>
  );
};

export default SeccionDestacada;
