import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <div className="video-player">
      <div className="video-wrapper">
        <iframe
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;