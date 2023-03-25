

const Price = ({price, discountedPrice}) => {
    if (price !== discountedPrice) {
    return (
<div style={{marginBottom: "10px"}}>
    <p style={{textDecoration: "line-through", }}>{price}</p>
    <p style={{color: "red", fontSize: "1.2rem"}}>{discountedPrice}</p>
</div>
    )
    } else return (
<div style={{marginBottom: "10px"}}>
    <p>
    {discountedPrice}
    </p>
</div>
    )
}

export default Price