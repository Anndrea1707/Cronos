import { Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contacto from "./pages/contac";
import Inicio from "../src/pages/inicio";
import Ayuda from "./pages/ayuda";
import Productos from "./pages/productos";
import ProductClick from "./components/productClick";
import Logeo from "../src/pages/logeo";
import Carrito from "../src/pages/carrito";
import { CartProvider } from "./context/CartContext"; // Importa el proveedor de contexto

export const App = () => {
  return (
    <CartProvider> {/* Envuelve las rutas con el CartProvider */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/product/:id" element={<ProductClick />} />
        <Route path="/logeo" element={<Logeo />} />
        <Route path="/carro" element={<Carrito />} />
      </Routes>
    </CartProvider>
  );
};

export default App;