import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../data/conexionBD";
import { doc, getDoc } from "firebase/firestore";
import Navbar from "./navbar";
import "../css/detalleProducto.css";
import Footer from "./footer";

function ProductClick({ addToCart }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = doc(db, "productos", id);
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
      } else {
        console.log("No existe el producto");
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Verifica si addToCart es una función antes de llamarla
    if (typeof addToCart === 'function') {
      addToCart(product);
    } else {
      console.error("addToCart no es una función válida");
    }
  };

  if (!product) {
    return (
      <div className="loading">
        <img src="../src/assets/loading.gif" alt="cargando" />
      </div>
    );
  }
  

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container-click px-5  mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap cont-img">
            <img
              alt="producto"
              className="lg:w-1/2 rounded img-product"
              src={product.imagenUrl}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 container-text">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Detalle del producto
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.nombre}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center ">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-orange-500 estrellita"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-orange-500 estrellita"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-orange-500 estrellita"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-orange-500 estrellita"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-orange-500 estrellita"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">Calificación</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product.descripcion}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-price">
                  ${product.precio}
                </span>
                <button
                  className="flex ml-auto text-white boton-agregar"
                  onClick={handleAddToCart}
                >
                  AGREGAR AL CARRITO
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200  hover:bg-orange-500 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-6 ">
            <h3 className=" sm:text-2xl text-2xl font-medium title-font mb-6 text-gray-800 text-left cnt-tarjeta">
              TotalMarket
            </h3>
            <span className="flex items-center pl-12">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 text-orange-500 estrellita"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 text-orange-500 estrellita"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 text-orange-500 estrellita"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 text-orange-500 estrellita"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 text-orange-500 estrellita"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="text-gray-600 ml-3">¡CALIFICACIÓN! </span>
            </span>
            <br />
            <p className="toast-container top-0 end-0 p-1 text-justify text-left cnt-tarjeta ">
              En TotalMarket, nuestro objetivo es ofrecerte una experiencia de
              compra completa y conveniente. Nos esforzamos por ser tu destino
              único para todas tus necesidades, desde artículos de hogar y
              electrónicos hasta moda y productos de cuidado personal. Queremos
              simplificar tu vida proporcionándote una amplia gama de productos
              de alta calidad, todo bajo un mismo techo. Ya sea que estés
              buscando artículos básicos del día a día o productos
              especializados, estamos aquí para satisfacer todas tus demandas,
              garantizando siempre la mejor calidad y servicio para ti, nuestro
              valioso cliente.
            </p>
            <br />
            <br />
            <div className="bg-white shadow-md rounded-lg p-6 mb-50 cnt-tarjeta merca-tarjet">
              <h3 className=" sm:text-2xl text-2xl font-medium title-font mb-6 text-gray-800 text-center">
                VALIDADO POR MERCAEMPRENDE
              </h3>
              <p className="toast-container top-0 end-0 p-1 text-justify text-left cnt-tarjeta">
                Nos complace anunciar que el producto y la tienda han sido
                validados por nuestro equipo en MercaEmprende. Esta validación
                confirma la calidad, seguridad y confianza que ofrecen tanto el
                producto como la tienda a nuestros usuarios. Nos enorgullece
                respaldar iniciativas emprendedoras como esta y estamos seguros
                de que su presencia en nuestra plataforma brindará a nuestros
                usuarios una experiencia de compra satisfactoria y confiable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductClick;
