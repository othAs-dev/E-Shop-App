import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import FloatingCart from "./Components/FloatingCart/FloatingCart";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import ShoppingCart from "./Pages/ShopppingCart/ShoppingCart";
import Products from "./Pages/Products/Products";
import ProductShowCase from "./Pages/ProductShowcase/ProductShowCase";
function App() {
  return (
    <Router>
      <Navbar />
      <FloatingCart />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/produits" element={<Products />} />
        <Route exact path="/produits/:id" element={<ProductShowCase />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
