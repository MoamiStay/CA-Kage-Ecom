import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <div id="mobile-logo">
            <img src="/Logo.png" alt="Logo" />
          </div>
        </Link>
        <div className="nav-bar">
          <Searchbar />

          <Link to="/">
            <div id="desktop-logo">
              <img src="/Logo.png" alt="Logo" />
            </div>
          </Link>

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
    </header>
  );
};

export default Header;
