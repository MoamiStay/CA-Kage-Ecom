import Item from "./Item";


const ListProducts = (props) => {
const productList = props.productList;

    return (
        <>
          <div className="page-title">
        <h1>Products</h1>
      </div>
      <div className="product-container">
        {productList.map((item, idx) => {
          return <Item key={idx} item={item} />;
        })}
      </div>
      </>
    )
};

export default ListProducts;