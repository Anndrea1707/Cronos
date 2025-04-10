import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../css/productos.css";

const Model3D = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  // Animación de rotación constante
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Ajusta la velocidad de rotación
    }
  });

  // Ajustar escala del modelo para que no sea tan grande
  return <primitive ref={modelRef} object={scene} scale={1} />;
};

const PreviewModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="products-preview">
      <div className="preview">
        <i className="fas fa-times" onClick={onClose}></i>
        <div className="model-container">
          <Canvas camera={{ position: [0, 2, 6] }}>  {/* Cámara más atrás */}
            <ambientLight intensity={1} />
            <directionalLight position={[2, 1, 5]} intensity={5} />
            <Model3D modelPath={product.model3D} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <h4>{product.categoria}</h4>
        <h3>{product.name}</h3>
        <div className="price">${product.precio}</div>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <span>(5)</span>
        </div>
        <div className="buttons">
          <Link to={`/product/${encodeURIComponent(product.id)}`} className="cart">Leer más</Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
