import React, { useState } from "react";
import "../css/login.css";
import { FaUser, FaLock, FaArrowLeft } from "react-icons/fa"; // Importa FaArrowLeft
import fondo from "../assets/fondo3.jpg";

const Logeo = () => {
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`¡Inicio de sesión exitoso, ${username}!`);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <div className="contenedor">
        <img src={fondo} alt="" />
        <div className="wrapper">
          <a href="/" className="flecha-link"> {/* Añade la flecha con un enlace */}
            <FaArrowLeft className="flecha-icon" />
          </a>
          <form onSubmit={handleLogin}>
            <h1>Inicia Sesión</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Usuario"
                required
                value={username}
                onChange={handleUsernameChange}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Contraseña" required />
              <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Recuérdame
              </label>
              <a href="#">Olvidé mi contraseña</a>
            </div>

            <button type="submit">Iniciar</button>

            <div className="register-link">
              <p>
                ¿No tienes una cuenta? <a href="Register">Regístrate aquí</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Logeo;
