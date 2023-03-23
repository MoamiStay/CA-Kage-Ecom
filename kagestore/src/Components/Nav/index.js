import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import CartIcon from "./CartIcon";

const Nav = () => {
  return (
    <nav>
      <div id="mobile-logo">
        <img src="/Logo.png" alt="Logo" />
      </div>
      <div className="nav-bar">
        <Searchbar />
        <div id="desktop-logo">
          <img src="/Logo.png" alt="Logo" />
        </div>
        <CartIcon />
        <div className="hidden">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ProductDetails">ProductDetails</Link>
            </li>
            <li>
              <Link to="/Cart">Cart</Link>
            </li>
            <li>
              <Link to="/CheckoutSuccess">CheckoutSuccess</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/MissingPage">MissingPage</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
