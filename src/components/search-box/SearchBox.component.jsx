import React from "react";
import "./SearchBox.css";

const Searchbox = ({placeholder ,handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
export default Searchbox;
