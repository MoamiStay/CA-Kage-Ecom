const Form = () => {
    return (
            <form>
              {/* <label for="quantity">Quantity </label> */}
              <select name="selectNumber" defaultValue={"1"}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </form>
    );
};

export default Form;