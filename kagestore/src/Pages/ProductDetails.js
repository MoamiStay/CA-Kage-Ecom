import useApi from "../Hooks/useApi";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProductURL } from "../Utils/constants";
import { addItem } from "../Redux/cartSlice";
import Back from "../Components/ProductDetails/Back";
import Rating from "../Components/ProductDetails/Rating";
import Reviews from "../Components/ProductDetails/Reviews";
import ProductPrice from "../Components/ProductDetails/ProductPrice";
import {
  RatingContainer,
  Img,
  ImgContainer,
  CheckoutInfo,
} from "../Components/ProductDetails/styles";

const ProductDetails = () => {
  const { id } = useParams();
  const [cartItems, setCartItem] = useLocalStorage("cartItems", []);
  const [cartCount, setCartCount] = useLocalStorage("cartCount", 0);
  const { data, isLoading, isError } = useApi(ProductURL + id);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="spinner">
        <img className="spinner" src="/loaderi.gif" alt="" />
      </div>
    );
  }

  if (isError) {
    return <h1>An error occured</h1>;
  }

  const addToCart = (item) => {
    setCartItem([...cartItems, item]);
    setCartCount([Number(cartCount) + 1]);
    dispatch(
      addItem({
        index: data.id,
        item: data,
      })
    );
  };

  return (
    <>
      <Back />
      <section>
        <ImgContainer>
          <Img src={data.imageUrl} alt={data.title} />
        </ImgContainer>
        <RatingContainer>
          <h2>{data.title}</h2>
          {<Rating />}
        </RatingContainer>
        <h3>Description</h3>
        <p>{data.description}</p>

        <CheckoutInfo>
          <ProductPrice
            ordinary={data.price}
            discountedPrice={data.discountedPrice}
          />
          <button
            onClick={() => {
              addToCart(data);
            }}
          >
            Add to shopping bag
          </button>
        </CheckoutInfo>
      </section>
      <section>
        <Reviews />
      </section>
    </>
  );
};

export default ProductDetails;
