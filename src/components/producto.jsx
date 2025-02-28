import React from "react";

const Producto = ({ product, onClick }) => {
  return (
    <div className="product" key={product.id} onClick={() => onClick(product)}>
      <img src={product.imagenUrl} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <div className="price">${product.precio}</div>
    </div>
  );
};

export default Producto;
