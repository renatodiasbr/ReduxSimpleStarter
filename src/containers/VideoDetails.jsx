import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import consts from "../constants";

const VideoDetail = ({ video }) => {
  if (_.isNull(video) || _.isEmpty(video)) return <span>Loading ...</span>;

  const url = `${consts.youtubeEmbedUrl}/${video.id.videoId}`;

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { video: state.selectedVideo };
}

export default connect(mapStateToProps)(VideoDetail);
