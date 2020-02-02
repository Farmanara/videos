import "./VideoItem.css";
import React from "react";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        className="ui image small"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div> {video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
