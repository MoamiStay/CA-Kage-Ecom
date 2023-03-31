const ItemDiscount = (props) => {
    const ordinary = props.ordinary;
    const discount = props.discount;

    if (props.ordinary !== props.discount) {
        return (
            <div>
                <p>{ordinary}</p>
                <p>{discount}</p>
            </div>
        )
    } else return (
        <div>
            <p>{discount}</p>
        </div>
    )
};

export default ItemDiscount;