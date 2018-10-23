import React, { Component } from "react";
import { connect } from "react-redux";
import { requestVideos } from "../actions";

class SearchBar extends Component {
  componentDidMount() {
    this.props.requestVideos("surf");
  }

  render() {
    const { videos, requestVideos } = this.props;
    return (
      <div className="search-bar">
        <input
          type="text"
          value={videos.searchTerm}
          onChange={e => requestVideos(e.target.value)}
          className="form-control"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.videos };
}

function mapDispatchToProps(dispatch) {
  return { requestVideos: searchTerm => dispatch(requestVideos(searchTerm)) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
