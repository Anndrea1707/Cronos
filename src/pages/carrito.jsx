import React, { useEffect, useState, useContext } from "react";
import "../css/carrito.css";
import Navbar from "../components/navbar";
import Producto from "../components/producto";
import PreviewModal from "../components/previewModal";
import { db } from "../data/conexionBD";
import { collection, getDocs } from "firebase/firestore";
import Footer from "../components/footer";
import Basurita from "../assets/basurita.png";
import { CartContext } from "../context/CartContext"; // Importa el contexto del carrito

export const Carrito = () => {
  const [randomNewProducts, setRandomNewProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext); // Accede al estado y las funciones del carrito
  const [total, setTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

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

  useEffect(() => {
    // Calcular el total del pedido cada vez que cambien los items del carrito
    const nuevoTotal = cartItems.reduce(
      (acc, item) => acc + item.precio * item.quantity,
      0
    );
    setTotal(nuevoTotal);
  }, [cartItems]);

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    while (0 !== currentIndex) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePreview = () => {
    setSelectedProduct(null);
  };

  const eliminarProducto = (id) => {
    removeFromCart(id);
  };

  const handleCantidadChange = (id, cantidad) => {
    updateQuantity(id, cantidad);
  };

  const realizarCompra = () => {
    if (cartItems.length > 0) {
      setModalVisible(true);
      // Aquí podrías implementar la lógica para procesar la compra
      // (enviar datos a un servidor, etc.)
      // Opcionalmente, podrías limpiar el carrito después de simular la compra:
      // clearCart();
    } else {
      alert("El carrito está vacío. Añade productos para realizar la compra.");
    }
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="productos">
          <h3 className="titulo-seccion">Productos añadidos</h3>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            cartItems.map((producto) => (
              <div className="producto" key={producto.id}>
                <div className="info-producto">
                  <div className="imagen-producto">
                    <img src={producto.image} alt={producto.name} />
                  </div>
                  <div className="detalle-producto">
                    <h4 className="nombre-producto">{producto.name}</h4>
                    <p className="descripcion-producto">{producto.descripcion}</p>
                  </div>
                </div>
                <div className="cantidad">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={producto.quantity}
                    onChange={(e) =>
                      handleCantidadChange(producto.id, parseInt(e.target.value))
                    }
                  />
                </div>
                <div className="precio">
                  <p className="precio-producto">
                    ${(producto.precio * producto.quantity).toLocaleString()}
                  </p>
                  <button
                    className="eliminar-producto"
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    <img src={Basurita} alt="Eliminar" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="resumen-pedido">
          <h3 className="titulo-seccion">Resumen del Pedido</h3>
          <div className="total">
            <span>Cantidad total: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
          </div>
          <div className="total">
            <span>Total: ${total.toLocaleString()}</span>
          </div>
          <button
            className="realizar-compra"
            onClick={realizarCompra}
            disabled={cartItems.length === 0}
          >
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

      

      {selectedProduct && (
        <PreviewModal product={selectedProduct} onClose={handleClosePreview} />
      )}

      <Footer />
    </>
  );
};

export default Carrito;