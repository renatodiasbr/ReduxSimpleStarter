import React from "react";
import consts from "../constants";

const VideoDetail = ({ video }) => {
  if (!video) return <span>Loading ...</span>;

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

export default VideoDetail;
