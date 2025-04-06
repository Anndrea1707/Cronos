import React from "react";
import "../css/seccionDestacada.css";
import Modelo3D from "./modelo3DPrincipal";
import { Link } from "react-router-dom";

const SeccionDestacada = () => {
  return (
    <div className="destacada-container">
      <div className="destacada-content">
        <h2>El tiempo de los Dioses, en tus manos</h2>
        <p>Descubre relojes inspirados en la grandeza de la mitología griega. Diseños únicos que capturan el poder, la elegancia y la eternidad de los dioses en cada detalle.</p>
        <Link to={"/productos"} className="btn-destacada">Ver coleccion</Link>
      </div>
      <div className="destacada-image">
        <Modelo3D />
      </div>
    </div>
  );
};

export default SeccionDestacada;
