import React from "react";

const Video = () => {
    return (
        <div className="video" id="video">
        <iframe className="video-embed" style={{width: "1000", height: "550"}} src="https://www.youtube.com/embed/x6QT2LGaYEI?si=_FaKqmvUGqWwc-mD" title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    )
}

export default Video;