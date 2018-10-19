import React, { Component } from "react";
import YoutubeApiSearch from "youtube-api-search";

import consts from "../constants";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

export default class App extends Component {
  state = {
    searchTerm: "surf",
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.doSearch();
  }

  doSearch() {
    YoutubeApiSearch(
      { key: consts.youtubeApikey, term: this.state.searchTerm },
      videos => this.setState({ videos, selectedVideo: videos[0] })
    );
  }

  onSearchTermChanges = searchTerm => {
    this.setState({ searchTerm });
    this.doSearch();
  };

  onVideoSelect = selectedVideo => this.setState({ selectedVideo });

  render() {
    const { searchTerm, videos, selectedVideo } = this.state;

    return (
      <React.Fragment>
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChanges={this.onSearchTermChanges}
        />
        <div className="row">
          <VideoDetails video={selectedVideo} />
          <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
        </div>
      </React.Fragment>
    );
  }
}
