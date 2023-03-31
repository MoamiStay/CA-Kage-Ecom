const ClearStorage = () => {
    localStorage.removeItem("cartCount");
    localStorage.removeItem("cartItems");
};

export default ClearStorage;