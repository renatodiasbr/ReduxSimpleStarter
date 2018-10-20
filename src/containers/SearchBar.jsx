import React, { Component } from "react";

const SearchBar = ({ searchTerm, onSearchTermChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={e => onSearchTermChange(e.target.value)}
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;
