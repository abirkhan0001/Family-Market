


import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleProduct from "./components/pages/SingleProduct";
import CategoryProducts from "./components/pages/CategoryProducts";

import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/category/:category" element={<CategoryProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
