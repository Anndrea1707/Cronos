import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Producto from "../components/producto";
import PreviewModal from "../components/previewModal";
import { db } from "../data/conexionBD";
import { collection, getDocs } from "firebase/firestore";
import "../css/inicio.css";
import { data } from "../assets/data";
import estadistica from "../assets/reloj.jpg";
import SeccionDestacada from "../components/seccionDestacada";

const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const listRef = useRef(null);
  const [randomNewProducts, setRandomNewProducts] = useState([]);
  const [randomDiscountedProducts, setRandomDiscountedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        console.log("Conectando a Firestore..."); // <-- Verifica si se ejecuta la función
        const productsCol = collection(db, "productos");
        const productSnapshot = await getDocs(productsCol);

        console.log("Datos obtenidos de Firestore:", productSnapshot.docs.length); // <-- ¿Cuántos documentos hay?

        const productList = productSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Lista de productos:", productList); // <-- Muestra los datos obtenidos

        const shuffledProducts = shuffleArray(productList);

        const randomNewThreeProducts = shuffledProducts.slice(0, 3);
        setRandomNewProducts(randomNewThreeProducts);

        const randomDiscountedThreeProducts = shuffledProducts.slice(3, 6);
        setRandomDiscountedProducts(randomDiscountedThreeProducts);
      } catch (error) {
        console.error("Error al conectar con Firestore:", error); // <-- Muestra el error si hay problemas
      }
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

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePreview = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="inicio">
        <Navbar onCategoryChange={() => { }} />
        <SeccionDestacada />

        <br />

        <div className="elegant-text-container">
  <h3 className="elegant-title">
    Desde la ingeniería de precisión hasta la selección minuciosa de materiales, 
    cada creación de Cronos representa la convergencia entre innovación y elegancia. 
    Nuestros relojes son el resultado de una dedicación inquebrantable al detalle, donde cada movimiento, 
    cada línea y cada textura es pensada para perdurar.
    <br></br>
    Cronos no sigue al tiempo. Lo lidera.
  </h3>
</div>
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
        <Footer />
      </div>
    </>
  );
};

export default Inicio;
