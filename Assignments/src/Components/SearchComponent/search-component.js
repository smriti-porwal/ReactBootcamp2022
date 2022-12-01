import { useState } from "react";

import { searchFilter } from "../../Utility/filter";
import "./search-component.css"

const SearchComponent = ({ data, setFilteredData }) => {
  const [searchText, setSearchText] = useState("");
  console.log("usestate"+useState())
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const filteredData = searchFilter(data, searchText);
        setFilteredData(filteredData);
      }}
    >
      <button id="searchButton">Search</button>
      <input id="searchBox"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        placeholder="search anything here..."
      ></input>
    </form>
  );
};

export default SearchComponent;
