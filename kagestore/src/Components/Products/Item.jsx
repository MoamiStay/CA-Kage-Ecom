import { Link } from "react-router-dom";
import { Wrapper, Img, ImgContainer, InfoContainer } from "./styles";
import Price from "./Price";

const Item = ({ item }) => {
    return (
        <div style={{marginBottom: "35px"}}>
            <Link to={`/ProductDetails/${item.id}`}>
                <Wrapper>

                    <ImgContainer>
                    <Img src={item.imageUrl} alt={item.title}></Img>
                    </ImgContainer>

                    <InfoContainer>
                        <div>
                            <h3>{item.title}</h3>
                        </div>
                        <div>
                            {<Price price={item.price} discountedPrice={item.discountedPrice}/>}
                        </div>
                        <button>Add to cart</button>
                    </InfoContainer>
                </Wrapper>
            </Link>
        </div>
    );
};

export default Item;