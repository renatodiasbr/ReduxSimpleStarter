import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { searchTerm, onSearchTermChange } = this.props;
    return (
      <div className="search-bar">
        <input
          value={searchTerm}
          onChange={e => onSearchTermChange(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
