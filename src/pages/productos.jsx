import { useState, useEffect } from "react";
import { db } from "../data/conexionBD";
import { collection, getDocs, query, where } from "firebase/firestore";
import "../css/productos.css";
import Navbar from "../components/navbar";
import Producto from "../components/producto";
import PreviewModal from "../components/previewModal";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import noResultsImage from "../assets/productNot.gif"; 

const Productos = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
    const fetchProducts = async () => {
      let productsCol = collection(db, "productos");
      if (selectedCategory) {
        productsCol = query(
          productsCol,
          where("categoria", "==", selectedCategory)
        );
      }
      const productSnapshot = await getDocs(productsCol);
      const productList = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
      setFilteredProducts(productList); // Initially set filtered products
    };
    fetchProducts();
  }, [selectedCategory]);

  useEffect(() => {
    const filterProducts = () => {
      if (!searchQuery) {
        setFilteredProducts(products);
        return;
      }
      const filtered = products.filter(product =>
        product.nombre.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    };
    filterProducts();
  }, [searchQuery, products]);

  useEffect(() => {
    if (!selectedCategory) {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

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
        <h3 className="title">NUESTROS PRODUCTOS</h3>
        {filteredProducts.length > 0 ? (
          <div className="products-container">
            {filteredProducts.map((product) => (
              <Producto
                key={product.id}
                product={product}
                onClick={handleProductClick}
              />
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
