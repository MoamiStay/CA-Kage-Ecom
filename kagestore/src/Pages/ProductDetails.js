import { useParams } from "react-router-dom";
import useApi from "../Hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
// import useLocalStorage from "../Hooks/useLocalStorage";
import { ProductURL } from "../Utils/constants";
import Rating from "../Components/ProductDetails/Rating";
import Price from "../Components/Products/Price";
import Form from "../Components/ProductDetails/Form";
// import Reviews from "../Components/ProductDetails/Reviews";
import {
  RatingContainer,
  Img,
  ImgContainer,
  CheckoutInfo,
} from "../Components/ProductDetails/styles";
import { addItem } from "../Redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(ProductURL + id);
  const { items, total } = useSelector((state) => state.cart);
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

  const handleAdd = () => {
    dispatch(
      addItem({
        index: data.id,
        name: data.title,
        price: data.discountedPrice,
        amount: 1,
      })
    );
  };

  return (
    <>
      <button>Back</button>
      <div className="page-title">
        <h1>Product</h1>
      </div>

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
          <Price price={data.price} discountedPrice={data.discountedPrice} />
          <Form />
          <button onClick={handleAdd}>Add to shopping bag</button>
        </CheckoutInfo>
      </section>
      <section>
        {/* {data.tags.map(({ item }) => {
          <h2>{item.unsername}</h2>;
        })} */}
      </section>
    </>
  );
};

export default ProductDetails;
