import React from 'react';
import './VideoCV.css';

const VideoCV = () => {
  return (
    <div className="video-cv-container">
      <div className="video-cv-content">
        <h2 className="video-cv-title">VIDEO CV</h2>
        <div className="video-wrapper">
          <iframe
            src="https://drive.google.com/file/d/19FZrFsG8LbjjcPH_5HCvVwaVloH04qdB/preview"
            className="video-frame"
            allow="autoplay"
            allowFullScreen
            title="Video CV"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCV;