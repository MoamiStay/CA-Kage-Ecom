import { Link } from "react-router-dom";
import { Wrapper } from "./styles";
import Searchbar from "./Searchbar";
import CartIcon from "./CartIcon";

const Nav = () => {
  return (
    <nav>
      <Wrapper>
        <Searchbar />
        <div>
          <img src="/Logo.png" alt="Logo" />
        </div>
        <CartIcon />

        <div>
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
      </Wrapper>
    </nav>
  );
};

export default Nav;
