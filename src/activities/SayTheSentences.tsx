import React from "react";

import SplitHilite from "./../components/SplitHilite";

export default (props: { ipa: string; sentences: string[] }) => {
  const { ipa, sentences } = props;

  const lines = sentences.map((line: string, index: number) => (
    <div className="sub-canvas personal-space" key={index}>
      <p className="no-margin-bottom">{line}</p>
    </div>
  ));

  return (
    <div className="headspace">
      <h3>
        {"Say the "}
        <SplitHilite str={ipa} />
        {" sentences"}
      </h3>
      {lines}
    </div>
  );
};
