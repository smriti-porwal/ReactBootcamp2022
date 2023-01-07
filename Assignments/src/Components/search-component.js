import { useState } from "react";

import { searchFilter } from "../Utility/filter";

const SearchComponent = ({ data, setFilteredData }) => {
  const [searchText, setSearchText] = useState("");
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const filteredData = searchFilter(data, searchText);
        setFilteredData(filteredData);
      }}
    >
      {/* <span className="border border-solid"> */}
      <button className="bg-slate-200 border border-solid p-2" id="searchButton">Search</button>
      <input className="border border-solid p-2"
        id="searchBox"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        placeholder="search anything here..."
      ></input>
      {/* </span> */}
    </form>
  );
};

export default SearchComponent;
