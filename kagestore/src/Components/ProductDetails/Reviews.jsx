import useApi from "../../Hooks/useApi";
import { useParams } from "react-router-dom";
import { ProductURL } from "../../Utils/constants";
import Rating from "./Rating";
import { ReviewContainer, ReviewOverhead } from "./styles";

const Reviews = () => {
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

  if(data.reviews?.length > 0) {
    return (
        <>
        {data?.reviews.map((item) => { 
            console.log(item.username); 
            return (
                <ReviewContainer>
                    <ReviewOverhead>
                    <h3>{item.username}</h3> 
                    <Rating />
                    </ReviewOverhead>
                    <p>{item.description}</p>
                 </ReviewContainer>   
            )   
        })}
     </>
    )} else return (<h3>No reviews for this item yet</h3>)
};


export default Reviews;