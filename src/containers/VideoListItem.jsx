import React from "react";
import { connect } from "react-redux";
import { selectVideo } from "../actions";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="media my-4 m-2" onClick={() => onVideoSelect(video)}>
      <img className="mr-3" src={imageUrl} alt={video.snippet.title} />
      <div className="media-body">
        <h5 className="mt-0 mb-1">{video.snippet.title}</h5>
        {video.snippet.title}
      </div>
    </li>
  );
};

function mapDispatchToProps(dispatch) {
  return { onVideoSelect: video => dispatch(selectVideo(video)) };
}

export default connect(
  null,
  mapDispatchToProps
)(VideoListItem);
