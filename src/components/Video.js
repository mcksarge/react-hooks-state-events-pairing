import React from "react";



function Video ({ videoData }) {
    const videoSrc = videoData.embedUrl;
    
    return (
        <iframe
        width="919"
        height="525"
        src={videoSrc}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    )
}


export default Video