import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import { ProductURL } from "../../Utils/constants";

const Rating = () => {
const { id } = useParams();
const { data } = useApi(ProductURL + id);

const rating = data.rating;

switch (rating) {
    case 5:
    case 4.5: {
        return (<img src="/stars/stars5.svg" alt="" />);
    }
    case 4:
    case 3.5: {
        return (<img src="/stars/stars4.svg" alt="" />);
    }
    case 3:
    case 2.5: {
        return (<img src="/stars/stars3.svg" alt="" />);
    }
    case 2:
    case 1.5: {
        return (<img src="/stars/stars2.svg" alt="" />);
    }
    case 1:
    case 0.5: {
        return (<img src="/stars/stars1.svg" alt="" />);
    }
    case 0: {
        return (<img src="/stars/stars0.svg" alt="" />);
    }
    default:
        break;
}
};

export default Rating;