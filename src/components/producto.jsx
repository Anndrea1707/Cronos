import React from "react";

const Producto = ({ product, onPreview }) => {
  return (
    <div className="product" key={product.id} onClick={() => onPreview(product)}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="category">{product.categoria}</p>
      <div className="price">${product.price}</div>
    </div>
  );
};

export default Producto;
