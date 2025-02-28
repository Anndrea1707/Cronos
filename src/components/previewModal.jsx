import React from "react";
import { Link } from "react-router-dom"; // Importar Link de React Router
import "../css/productos.css";

const PreviewModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="products-preview">
      <div className="preview">
        <i className="fas fa-times" onClick={onClose}></i>
        <img src={product.imagenUrl} alt={product.nombre} />
        <h4>{product.categoria}</h4>
        <h3>{product.nombre}</h3>
        <div className="price">${product.precio}</div>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <span>(5)</span>
        </div>
        {/* Reemplazar el enlace <a> con un componente <Link> */}
        <div className="buttons">
          {/* Utilizar el to prop del componente <Link> para especificar la ruta */}
          <Link to={`/product/${product.id}`} className="cart">Leer más</Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
