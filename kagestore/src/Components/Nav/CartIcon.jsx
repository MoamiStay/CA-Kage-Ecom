import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const CartIcon = () => {
  const { cartTracker } = useSelector((state) => state.cart);

  const initialCart = JSON.parse(window.localStorage.getItem("cartCount"));
  

  if(initialCart === null) {
    return (
      <div>
        <img src="/cart-shopping.png" alt="shopping cart icon" />
      </div>
    )
  } else return (
        <div>
        <Link to="/Cart">
            <div>{initialCart[0]}</div>
            <img src="/cart-shopping.png" alt="shopping cart icon" />
        </Link>
        </div>
    )
};

export default CartIcon;


