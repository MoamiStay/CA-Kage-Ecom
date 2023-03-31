// import { useSelector } from "react-redux";

const ClearStorage = () => {
    // const { cartTracker } = useSelector((state) => state.cart);
    // console.log(cartTracker);

    localStorage.removeItem("cartCount");
    localStorage.removeItem("cartItems");

};



export default ClearStorage;