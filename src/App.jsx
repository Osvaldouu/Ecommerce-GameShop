import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Slider from "./components/Slider/Slider"

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Slider />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />

            <Route path="/idCategory/:idCategory" element={<ItemListContainer />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
