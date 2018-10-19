import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { searchTerm, onSearchTermChanges } = this.props;
    return (
      <div className="search-bar">
        <input
          value={searchTerm}
          onChange={e => onSearchTermChanges(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
