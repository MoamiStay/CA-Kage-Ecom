import { useNavigate } from "react-router-dom";

const Back = () => {
    const navigate = useNavigate();
    return (
      <>
        <button onClick={() => navigate(-1)}>Go back</button>
      </>
    )
};

export default Back;