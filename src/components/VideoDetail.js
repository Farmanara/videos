import React from "react";
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div> Loading... </div>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          width="120"
          height="240"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
        ></iframe>
      </div>
      <div className="segment ui">
        <h4 className="header">{video.snippet.title}</h4>
        <p> {video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
