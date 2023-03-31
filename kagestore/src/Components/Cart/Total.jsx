import { Sum } from "./styles";

const Total = (props) => {
const total = props.total;
const discount = props.discount;

const Total = total;
const Discount = total - discount;
const FinalTotal = Total - Discount;

return (
    <div>
        <Sum>
            <p>Total: </p>
            <p>{Total.toFixed(2) + ` kr`}</p>
        </Sum>
        <Sum>
            <p>Discount: </p>
            <p>{`-` + Discount.toFixed(2) + ` kr`}</p>
        </Sum>
        <Sum>
            <p>TOTAL: </p>
            <p>{FinalTotal.toFixed(2) + ` kr`}</p>
        </Sum>
    </div>
)
};

export default Total;