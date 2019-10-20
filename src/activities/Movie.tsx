import React from "react";

import YouTube from "../components/YouTube";
import SplitHilite from "./../components/SplitHilite";

export default (props: {
  ipa: string;
  title: string;
  src: string;
  isUserAuth: boolean;
}) => {
  const { ipa, title, src } = props;
  debugger;

  let media;

  if (src) {
    media = <YouTube src={src} title={title} />;
  } else {
    media = (
      <img
        src="/assets/images/movie-english-pronounce-coming-soon.jpg"
        className="full-width"
      />
    );
  }

  return (
    <div className="head-space">
      <h3>
        {`English Pronunciation movie for `}
        <SplitHilite str={ipa} />
      </h3>

      {media}
    </div>
  );
};
