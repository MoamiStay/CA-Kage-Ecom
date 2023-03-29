import Price from "../Products/Price";

const ProductPrice = (props) => {
    const ordinary = props.ordinary;
    const discountedPrice = props.discountedPrice;
    const discount = ordinary - discountedPrice;

    if (ordinary !== discountedPrice) {
        return ( 
        <>
            <Price price={ordinary} discountedPrice={discountedPrice} />
            <p style={{color: "red", fontSize: "1.2rem", position: "relative", top: "-25px"}}>{`-${discount} kr`}</p>
            </>
        )
    }
};

export default ProductPrice;