import useApi from "../Hooks/useApi";
import { URL } from "../Utils/constants";
import ListProducts from "../Components/Products/ListProducts";

const Home = () => {
  const { data, isLoading, isError } = useApi(URL);
  // console.log(data);

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
      <ListProducts productList={data} />
    </>
  );
};

export default Home;
