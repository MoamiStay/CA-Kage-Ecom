import { Routes, Route } from "react-router-dom"; // import { Outlet } to use Layout component
import Header from "./Components/Nav";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import CheckoutSuccess from "./Pages/CheckoutSucccess";
import MissingPage from "./Pages/MissingPage";
import Footer from "./Components/Footer";

// NOTE:
// I chose not to use the Layout component due to styling reasons since
// I looked into the Layout comp after doing all styling and the initial setup.
// I instead import the Footer and Header components and put them directly
// into the App function to keep them collected in one place and be easy to adjust if necessary.
//
// I understand how to use Layout and will consider using it for future projects, but I was just too lazy to change it here.

// const Layout = () => {
//   return (
//     <div>
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

function App() {
  return (
    <div className="main-container">
      <Header />
      <main>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="ProductDetails/:id" element={<ProductDetails />} />
          <Route path="Cart/" element={<Cart />} />
          <Route path="Contact/" element={<Contact />} />
          <Route path="CheckoutSuccess/" element={<CheckoutSuccess />} />
          <Route path="MissingPage/" element={<MissingPage />} />
          {/* </Route> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
