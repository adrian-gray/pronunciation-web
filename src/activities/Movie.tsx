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

  return (
    <div className="head-space">
      <h3>
        {`English Pronunciation movie for `}
        <SplitHilite str={ipa} />
      </h3>

      <YouTube src={src} title={title} />
    </div>
  );
};
