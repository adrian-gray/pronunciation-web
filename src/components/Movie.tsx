import React from "react";

import SplitHilite from "./SplitHilite";

export default (props: { ipa: string; url: string; isUserAuth: boolean }) => {
  const { ipa, url } = props;

  return (
    <div className="head-space">
      <h3>
        {`English Pronunciation movie for `}
        <SplitHilite str={ipa} />
      </h3>

      <img className="full-width" src={url} alt={`Pronouncing ${ipa}`} />
    </div>
  );
};
