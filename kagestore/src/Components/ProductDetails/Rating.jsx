import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import { ProductURL } from "../../Utils/constants";

const Rating = () => {
const { id } = useParams();
const { data, isLoading, isError } = useApi(ProductURL + id);

    return (
        <>
        <p>{data.rating}</p>
        <img src="/stars/stars5.svg" alt="" />
        </>
    );
};

export default Rating;