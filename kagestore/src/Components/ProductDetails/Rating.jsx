import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import { ProductURL } from "../../Utils/constants";

const Rating = () => {
const { id } = useParams();
const { data } = useApi(ProductURL + id);

const rating = round(data.rating);

switch (rating) {
    case 5: {
        return (<img src="/stars/stars5.svg" alt="" />);
    }
    case 4: {
        return (<img src="/stars/stars4.svg" alt="" />);
    }
    case 3: {
        return (<img src="/stars/stars3.svg" alt="" />);
    }
    case 2: {
        return (<img src="/stars/stars2.svg" alt="" />);
    }
    case 1: {
        return (<img src="/stars/stars1.svg" alt="" />);
    }
    case 0: {
        return (<img src="/stars/stars0.svg" alt="" />);
    }
    default:
        break;
}
};

function round(num) {
    return Math.round(num);
}

export default Rating;