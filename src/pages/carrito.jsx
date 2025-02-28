import React, { useEffect, useState } from "react";
import "../css/carrito.css";
import Navbar from "../components/navbar";
import Producto from "../components/producto";
import PreviewModal from "../components/previewModal";
import productoImg1 from "../assets/product1.webp";
import productoImg2 from "../assets/product2.webp";
import productoImg3 from "../assets/product3.jpg";
import { db } from "../data/conexionBD";
import { collection, getDocs } from "firebase/firestore";
import Footer from "../components/footer";
import Basurita from "../assets/basurita.png";

export const Carrito = () => {
  // Productos random en la parte inferior
  const [randomNewProducts, setRandomNewProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      const productsCol = collection(db, "productos");
      const productSnapshot = await getDocs(productsCol);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const shuffledProducts = shuffleArray(productList);

      const randomNewThreeProducts = shuffledProducts.slice(0, 6);
      setRandomNewProducts(randomNewThreeProducts);
    };
    fetchRandomProducts();
  }, []);

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePreview = () => {
    setSelectedProduct(null);
  };

  // Estado para almacenar los productos en el carrito
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Botas Cartepillar",
      cantidad: 1,
      precio: 150000,
      descripcion: "Descripción del producto ",
      imagen: productoImg1,
    },
    {
      id: 2,
      nombre: "Rubor liquido",
      cantidad: 2,
      precio: 50000,
      descripcion: "Descripción del producto",
      imagen: productoImg2,
    },
    {
      id: 3,
      nombre: "Falda corta en dril",
      cantidad: 3,
      precio: 80000,
      descripcion: "Descripción del producto",
      imagen: productoImg3,
    },
  ]);

  // Estado para almacenar el total del pedido
  const [total, setTotal] = useState(0);
  // Estado para almacenar la cantidad total de productos
  const [cantidadTotal, setCantidadTotal] = useState(0);

  // Calcular el total del pedido y la cantidad total de productos cada vez que cambien los productos
  useEffect(() => {
    const nuevoTotal = productos.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
    setTotal(nuevoTotal);

    const nuevaCantidadTotal = productos.reduce(
      (acc, producto) => acc + producto.cantidad,
      0
    );
    setCantidadTotal(nuevaCantidadTotal);
  }, [productos]);

  // Función para eliminar un producto del carrito
  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  // Función para manejar el cambio de cantidad de un producto
  const handleCantidadChange = (id, cantidad) => {
    const nuevosProductos = productos.map((producto) => {
      if (producto.id === id) {
        return { ...producto, cantidad: cantidad < 0 ? 0 : cantidad };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const realizarCompra = () => {
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="productos">
          <h3 className="titulo-seccion">Productos añadidos</h3>
          {productos.map((producto) => (
            <div className="producto" key={producto.id}>
              <div className="info-producto">
                <div className="imagen-producto">
                  <img src={producto.imagen} alt={producto.nombre} />
                </div>
                <div className="detalle-producto">
                  <h4 className="nombre-producto">{producto.nombre}</h4>
                  <p className="descripcion-producto">{producto.descripcion}</p>
                </div>
              </div>
              <div className="cantidad">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={producto.cantidad}
                  onChange={(e) =>
                    handleCantidadChange(producto.id, parseInt(e.target.value))
                  }
                />
              </div>
              <div className="precio">
                <p className="precio-producto">
                  ${producto.precio.toLocaleString()}
                </p>
                <button
                  className="eliminar-producto"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  <img src={Basurita} alt="Eliminar" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="resumen-pedido">
          <h3 className="titulo-seccion">Resumen del Pedido</h3>
          <div className="total">
            <span>Cantidad total: {cantidadTotal}</span>
          </div>
          <div className="total">
            <span>Total: ${total.toLocaleString()}</span>
          </div>
          <button className="realizar-compra" onClick={realizarCompra}>
            Realizar Compra
          </button>
        </div>

        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={cerrarModal}>
                &times;
              </span>
              <p className="modal-text">
                ¡Gracias por su compra! La factura será enviada a su correo.
              </p>
            </div>
          </div>
        )}
      </div>

      <br />

      <h3 className="titulo styled-h3">Productos relacionados</h3>
      <div className="container-prod">
        <div className="products-container">
          {randomNewProducts.map((product) => (
            <Producto
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <PreviewModal product={selectedProduct} onClose={handleClosePreview} />
      )}

      <Footer />
    </>
  );
};

export default Carrito;
