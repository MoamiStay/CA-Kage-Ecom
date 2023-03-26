import { Link } from "react-router-dom";
import { Wrapper, Img, ImgContainer, InfoContainer, Title } from "./styles";
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
                            <Title>{item.title}</Title>
                        </div>
                        <div>
                            {<Price price={item.price} discountedPrice={item.discountedPrice}/>}
                        </div>
                    </InfoContainer>
                </Wrapper>
            </Link>
            <InfoContainer>
            <button>View</button>
            </InfoContainer>
        </div>
    );
};

export default Item;