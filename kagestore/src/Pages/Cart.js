import { Link } from "react-router-dom";
import ItemDiscount from "../Components/Cart/ItemDiscount";
import ClearStorage from "../Components/Cart/ClearStorage";
import Total from "../Components/Cart/Total";
import {
  Items,
  Item,
  Img,
  Section,
  ItemFraction,
} from "../Components/Cart/styles";

const Cart = () => {
  const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));
  let total = 0;
  let discount = 0;
  let finalTotal = 0;

  return (
    <>
      <div className="page-title">
        <h1>Cart</h1>
      </div>
      <Section>
        <Items>
          {cartItems.map((item, idx) => {
            total += item.price;
            discount += item.discountedPrice;
            return (
              <div key={item.id + idx}>
                <Item>
                  <Img src={item.imageUrl} alt={item.title} />
                  <ItemFraction>
                    <p>{item.title}</p>
                  </ItemFraction>
                  <ItemFraction>
                    <ItemDiscount
                      ordinary={item.price}
                      discount={item.discountedPrice}
                    />
                  </ItemFraction>
                </Item>
              </div>
            );
          })}
        </Items>

        <Total total={total} discount={discount} />

        <div>
          <button>
            <Link to="/">Back to shop</Link>
          </button>
          <button onClick={ClearStorage}>
            <Link to="/CheckoutSuccess">Proceed to checkout</Link>
          </button>
        </div>
      </Section>
    </>
  );
};

export default Cart;
