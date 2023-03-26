

const Price = ({price, discountedPrice}) => {
    if (price !== discountedPrice) {
    return (
<div style={{marginBottom: "10px"}}>
    <p style={{textDecoration: "line-through", }}>{price + " kr"}</p>
    <p style={{color: "red", fontSize: "1.2rem"}}>{discountedPrice + " kr"}</p>
</div>
    )
    } else return (
<div style={{marginBottom: "10px"}}>
    <p>
    {discountedPrice + " kr"}
    </p>
</div>
    )
}

export default Price;