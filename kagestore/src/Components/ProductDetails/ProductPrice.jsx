import Price from "../Products/Price";

const ProductPrice = (props) => {
    const ordinary = props.ordinary;
    const discountedPrice = props.discountedPrice;
    const discount = ordinary - discountedPrice;

    if (ordinary !== discountedPrice) {
        return ( 
        <>
            <Price price={ordinary} discountedPrice={discountedPrice.toFixed(2)} />
            <p style={{color: "red", fontSize: "1.2rem", position: "relative", top: "-25px"}}>{`-${discount.toFixed(2)} kr`}</p>
            </>
        )
    }
};

export default ProductPrice;