import React, { useState } from "react";
import "../css/navbar.css";
import logo_merca from "../assets/logo1.png";
import logo_search from "../assets/buscar.png";
import logo_registro from "../assets/registro-usuarioWhite.png";
import flecha from "../assets/flecha.png";
import carro from "../assets/carro.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ onCategoryChange }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/productos", { state: { search: searchQuery } });
  };

  const handlerCategoryClick = (category) => {
    setShowSubmenu(false); // Close submenu on category click
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    navigate("/productos", { state: { category } });
  };

  const handleProductsClick = () => {
    setSearchQuery(""); // Reset search query
    setShowSubmenu(false); // Close submenu
    navigate("/productos", { state: {} });
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo_merca} alt="logo mercaemprende" className="logo" /> <h2 className="nameMerca">MercaEmprende</h2>
      </Link>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
          <span className="underline"></span>
        </li>
        <li
          onMouseEnter={() => setShowSubmenu(true)}
          onMouseLeave={() => setShowSubmenu(false)}
        >
          <a className="li-cate" onClick={handleProductsClick}>
            Productos
            <img src={flecha} alt="flecha" className="flecha" />
          </a>
          <span className="underline"></span>
          {showSubmenu && (
            <ul className="submenu">
              <li>
                <a
                  href="#Tecnologia"
                  onClick={() => handlerCategoryClick("Tecnologia")}
                >
                  Tecnologia
                </a>
              </li>
              <li>
                <a
                  href="#Calzado Dama"
                  onClick={() => handlerCategoryClick("Calzado Dama")}
                >
                  Calzado Dama
                </a>
              </li>
              <li>
                <a
                  href="#Calzado Caballero"
                  onClick={() => handlerCategoryClick("Calzado Caballero")}
                >
                  Calzado Caballero
                </a>
              </li>
              <li>
                <a
                  href="#Ropa Dama"
                  onClick={() => handlerCategoryClick("Ropa Dama")}
                >
                  Ropa Dama
                </a>
              </li>
              <li>
                <a
                  href="#Ropa Caballero"
                  onClick={() => handlerCategoryClick("Ropa Caballero")}
                >
                  Ropa Caballero
                </a>
              </li>
              <li>
                <a
                  href="#Belleza"
                  onClick={() => handlerCategoryClick("Belleza")}
                >
                  Belleza
                </a>
              </li>
              <li>
                <a
                  href="#Hogar"
                  onClick={() => handlerCategoryClick("Hogar")}
                >
                  Hogar
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
          <span className="underline"></span>
        </li>
        <li>
          <Link to="/ayuda">Ayuda</Link>
          <span className="underline"></span>
        </li>
      </ul>

      <form className="search-box" onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          placeholder="Buscar" 
          value={searchQuery} 
          onChange={handleSearchChange} 
        />
        <button type="submit">
          <img src={logo_search} alt="logo lupa" className="logo-buscar" />
        </button>
      </form>

      <div className="button-registro">
        <Link to="/logeo">
          <button>
            <img
              src={logo_registro}
              alt="logo usuario nuevo"
              className="logo-registro"
            />
          </button>
        </Link>
      </div>

      <div className="button-carro">
        <Link to="/carro">
          <button>
            <img src={carro} alt="logo carro" className="logo-carro" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
