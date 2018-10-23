import React, { Component } from "react";
import SearchBar from "../containers/SearchBar";
import VideoList from "../containers/VideoList";
import VideoDetails from "../containers/VideoDetails";

const App = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <SearchBar />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <VideoDetails />
        </div>
        <div className="col-4">
          <VideoList />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
