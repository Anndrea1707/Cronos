import { useState, useEffect } from "react";
import "../css/productos.css";
import Navbar from "../components/navbar";
import Producto from "../components/producto";
import PreviewModal from "../components/previewModal";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import noResultsImage from "../assets/productNot.gif";
import products from "../data/products"; // Se importa la lista de productos locales

const Productos = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      if (location.state.category) {
        setSelectedCategory(location.state.category);
        setSearchQuery("");
      } else if (location.state.search) {
        setSearchQuery(location.state.search);
        setSelectedCategory(null);
      } else {
        setSelectedCategory(null);
        setSearchQuery("");
      }
    }
  }, [location.state]);

  useEffect(() => {
    const filterProducts = () => {
      let filtered = products;
      if (selectedCategory) {
        filtered = filtered.filter((product) => product.categoria === selectedCategory);
      }
      if (searchQuery) {
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      setFilteredProducts(filtered);
    };
    filterProducts();
  }, [selectedCategory, searchQuery]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePreview = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Navbar />
      <div className="container-prod">
        <h3 className="title">Para ellos</h3>
        {filteredProducts.length > 0 ? (
          <div className="products-container">
            {filteredProducts.map((product) => (
              <Producto key={product.id} product={product} onPreview={handleProductClick} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <img src={noResultsImage} alt="No results found" />
          </div>
        )}
      </div>
      {selectedProduct && (
        <PreviewModal product={selectedProduct} onClose={handleClosePreview} />
      )}
      <Footer />
    </>
  );
};

export default Productos;
