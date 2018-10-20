import React, { Component } from "react";
import YoutubeApiSearch from "youtube-api-search";
import _ from "lodash";

import consts from "../constants";
import SearchBar from "../containers/SearchBar";
import VideoList from "../containers/VideoList";
import VideoDetails from "../containers/VideoDetails";

export default class App extends Component {
  state = {
    searchTerm: "surf",
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.doSearch();
  }

  doSearch = _.debounce(() => {
    YoutubeApiSearch(
      { key: consts.youtubeApikey, term: this.state.searchTerm },
      videos => this.setState({ videos, selectedVideo: videos[0] })
    );
  }, 300);

  onSearchTermChange = searchTerm => {
    this.setState({ searchTerm });
    this.doSearch();
  };

  onVideoSelect = selectedVideo => this.setState({ selectedVideo });

  render() {
    const { searchTerm, videos, selectedVideo } = this.state;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12">
            <SearchBar
              searchTerm={searchTerm}
              onSearchTermChange={this.onSearchTermChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="col-4">
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
