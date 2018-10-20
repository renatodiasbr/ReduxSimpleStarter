import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <ul className="list-unstyled">
      {videos.map(video => (
        <VideoListItem
          key={video.etag}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      ))}
    </ul>
  );
};

export default VideoList;
