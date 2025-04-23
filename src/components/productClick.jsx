import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import ModelViewer from "./modelViewer";
import "../css/detalleProducto.css";
import { CartContext } from "../context/CartContext"; // Importa el contexto del carrito

function ProductClick() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [currentModel, setCurrentModel] = useState("");
  const { addToCart } = useContext(CartContext); // Accede a la función addToCart del contexto

  useEffect(() => {
    import("../data/products")
      .then((module) => {
        const productsData = module.default;
        const foundProduct = productsData.find((p) => String(p.id) === String(id));
        if (foundProduct) {
          setProduct(foundProduct);
          setSelectedImage(foundProduct.gallery?.[0] || foundProduct.image);
        }
      })
      .catch((error) => console.error("Error cargando los productos:", error));
  }, [id]);

  const handleAddToCartClick = () => {
    if (product) {
      addToCart(product);
      alert(`${product.name} ha sido añadido al carrito.`); // Opcional: dar feedback al usuario
    }
  };

  const handleModelClick = (modelType) => {
    const modelPath = modelType === "hand" ? product.model3DHand : product.model3D;
    setCurrentModel(modelPath);
    setShowModel(true);
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setShowModel(false);
  };

  if (!product) {
    return (
      <div className="loading">
        <img src="../src/assets/loading.gif" alt="Cargando..." />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container-click px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex cont-img">
            {/* Galería de imágenes en el costado izquierdo */}
            <div className="gallery-container">
              {product?.gallery?.length > 0 ? (
                product.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Vista ${index + 1}`}
                    className={selectedImage === img ? "border-orange-500 " : "border-gray-300"}
                    onClick={() => handleImageClick(img)}
                  />
                ))
              ) : (
                <p>No hay imágenes disponibles</p>
              )}
            </div>

            {/* Imagen principal o modelo 3D */}
            <div className="lg:w-1/2 flex flex-col items-center model-viewer">
              {showModel && currentModel ? (
                <ModelViewer modelPath={currentModel} />
              ) : (
                <img alt="Producto" className="rounded img-product" src={selectedImage} />
              )}

              {/* Botones debajo de la imagen */}
              <div className="button-container">
                <button className="btn-model" onClick={() => handleModelClick("clock")}>⌚</button>
                <button className="btn-model" onClick={() => handleModelClick("hand")}>✋</button>
              </div>
            </div>

            {/* Descripción del producto */}
            <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 container-text">
              <h1 className="text-4xl title-font font-bold mb-2">{product.name}</h1>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Detalle del producto</h2>

              {/* Sección de colores */}
              <div className="flex flex-col mt-6 pb-5 border-b-2 border-gray-100 mb-5 space-y-3">
                <span className="mr-3">Colores disponibles:</span>
                {product.colores && Array.isArray(product.colores) ? (
                  product.colores.map((color, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <button
                        className="border-2 w-6 h-6 rounded-full focus:outline-none"
                        style={{ backgroundColor: color.hex }}
                      ></button>
                      <span className="text-gray-700">{color.name}</span>
                    </div>
                  ))
                ) : (
                  <p>No hay colores disponibles</p>
                )}
              </div>

              {/* Descripción del producto */}
              <p className="leading-relaxed mb-4">{product.descripcion}</p>

              <div className="flex ">
                <span className="title-font font-medium text-2xl text-price">${product.precio}</span>
                <button className="flex ml-auto text-white boton-agregar" onClick={handleAddToCartClick}>
                  AÑADIR AL CARRITO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductClick;