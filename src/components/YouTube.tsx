import React from "react";

export default (props: { title: string; src: string }) => {
  const { title, src } = props;
  const url = `https://www.youtube.com/embed/${src}`;
  return (
    <div className="video-container">
      <iframe
        data-type="text/html"
        src={url}
        title={title}
        width="853"
        height="480"
        frameBorder="0"
        data-allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};
