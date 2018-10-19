import React from "react";
import consts from "../constants";

const VideoDetail = ({ video }) => {
  if (!video) return <div className="col-8">Loading ...</div>;

  const url = `${consts.youtubeEmbedUrl}/${video.id.videoId}`;

  return (
    <div className="video-detail col-8">
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
