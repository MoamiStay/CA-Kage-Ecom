import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import CheckoutSuccess from "./Pages/CheckoutSucccess";
import MissingPage from "./Pages/MissingPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="main-container">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="ProductDetails/" element={<ProductDetails />} />
          <Route path="Cart/" element={<Cart />} />
          <Route path="Contact/" element={<Contact />} />
          <Route path="CheckoutSuccess/" element={<CheckoutSuccess />} />
          <Route path="MissingPage/" element={<MissingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
