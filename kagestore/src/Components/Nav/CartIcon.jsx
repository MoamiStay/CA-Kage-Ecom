import { useSelector } from "react-redux";


const CartIcon = () => {
      const { cartTracker } = useSelector(
    (state) => state.cart
  );
    
    return (
        <div>
            <div>{cartTracker}</div>
        <img src="/cart-shopping.png" alt="shopping cart icon" />
        </div>
    )
};

export default CartIcon;