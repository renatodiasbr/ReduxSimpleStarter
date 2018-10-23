import React from "react";
import { connect } from "react-redux";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos }) => {
  return (
    <ul className="list-unstyled">
      {videos.items.map(video => (
        <VideoListItem key={video.etag} video={video} />
      ))}
    </ul>
  );
};

function mapStateToProps(state) {
  return { videos: state.videos };
}

export default connect(mapStateToProps)(VideoList);
