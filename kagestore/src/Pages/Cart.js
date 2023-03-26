import { useSelector } from "react-redux";

const Cart = () => {
  const { items, total } = useSelector((state) => state.cart);

  return (
    <>
      <div className="page-title">
        <h1>Cart</h1>
      </div>
      <section>
        <h2>{total}</h2>
      </section>
    </>
  );
};

export default Cart;
