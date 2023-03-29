import ItemDiscount from "../Components/Cart/ItemDiscount";
import {
  Items,
  Item,
  Img,
  Section,
  ItemFraction,
  Sum,
} from "../Components/Cart/styles";

const Cart = () => {
  const cartItems = JSON.parse(window.localStorage.getItem("cartItems"));

  return (
    <>
      <div className="page-title">
        <h1>Cart</h1>
      </div>
      <Section>
        <Items>
          {cartItems.map((item) => {
            return (
              <div key={item.id}>
                <Item>
                  <Img src={item.imageUrl} alt={item.title} />
                  <ItemFraction>
                    <p>{item.title}</p>
                  </ItemFraction>
                  <ItemFraction>
                    <p>Quantity: </p>
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

        <div>
          <Sum>
            <p>Total: </p>
            <p>999</p>
          </Sum>
          <Sum>
            <p>Discount: </p>
            <p>999</p>
          </Sum>
          <Sum>
            <p>TOTAL: </p>
            <p>999</p>
          </Sum>
        </div>

        <div>
          <button>Back to shop</button>
          <button>Proceed to checkout</button>
        </div>
      </Section>
    </>
  );
};

export default Cart;
