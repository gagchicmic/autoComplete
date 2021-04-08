import React from "react";
import AutoCompleteData from "./AutoCompleteData";
import "./searchbar.css";

function SearchBar({ handleChange, isSearched }) {
  return (
    <div className="inputContainer">
      <input onChange={(e) => handleChange(e)} type="text" />
      {isSearched.length ? <AutoCompleteData data={isSearched} /> : null}
    </div>
  );
}

export default SearchBar;
