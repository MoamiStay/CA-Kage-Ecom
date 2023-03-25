import useApi from "../Hooks/useApi";
import { URL } from "../Utils/constants";
import Item from "../Components/Products/Item";

const Home = () => {
  const { data, isLoading, isError } = useApi(URL);
  console.log(data);

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
      <div className="page-title">
        <h1>Products</h1>
      </div>
      <div className="product-container">
        {data.map((item, idx) => {
          return <Item key={idx} item={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
