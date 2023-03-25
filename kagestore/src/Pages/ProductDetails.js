import { useParams } from "react-router-dom";
import useApi from "../Hooks/useApi";
// import useLocalStorage from "../Hooks/useLocalStorage";
import { ProductURL } from "../Utils/constants";
import Rating from "../Components/ProductDetails/Rating";
import { RatingContainer } from "../Components/ProductDetails/styles";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useApi(ProductURL + id);

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

  return (
    <>
      <button>Back</button>
      <div className="page-title">
        <h1>Product</h1>
      </div>
      <section>
        <div>
          <img src={data.imageUrl} alt={data.title} />
        </div>
        <RatingContainer>
          <h2>{data.title}</h2>
          {<Rating />}
        </RatingContainer>
        <p>{data.description}</p>
      </section>
    </>
  );
};

export default ProductDetails;
