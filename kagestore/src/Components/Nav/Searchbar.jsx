import { useState } from "react";


const Searchbar = () => {

  const [ search, setSearch ] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  }

    return (
        <div>
            <input onChange={onSearchChange} type="text" name="name" placeholder="Search"/>
        </div>
    )
};

export default Searchbar;
