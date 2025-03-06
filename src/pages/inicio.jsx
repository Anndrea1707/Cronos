import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Producto from "../components/producto";
import PreviewModal from "../components/previewModal";
import { db } from "../data/conexionBD";
import { collection, getDocs } from "firebase/firestore";
import "../css/inicio.css";
import { data } from "../assets/data";
import estadistica from "../assets/estadistica.jpg";
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
      const productsCol = collection(db, "productos");
      const productSnapshot = await getDocs(productsCol);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const shuffledProducts = shuffleArray(productList);

      const randomNewThreeProducts = shuffledProducts.slice(0, 3);
      setRandomNewProducts(randomNewThreeProducts);

      const randomDiscountedThreeProducts = shuffledProducts.slice(3, 6);
      setRandomDiscountedProducts(randomDiscountedThreeProducts);
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

        <h3 className="titulo styled-h3"></h3>
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

        <br />

        <h3 className="titulo styled-h3">Productos en descuento</h3>
        <div className="container-prod">
          <div className="products-container">
            {randomDiscountedProducts.map((product) => (
              <Producto
                key={product.id}
                product={product}
                onClick={handleProductClick}
              />
            ))}
          </div>
        </div>

        <br />

        <h3 className="titulo styled-h3">Nuestros mejores emprendimientos</h3>
        <img src={estadistica} alt="estadistica-empresas" className="estadistica" />

        {selectedProduct && (
          <PreviewModal product={selectedProduct} onClose={handleClosePreview} />
        )}

        <Footer />
      </div>
    </>
  );
};

export default Inicio;
