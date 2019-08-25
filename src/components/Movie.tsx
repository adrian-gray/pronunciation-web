import React from "react";

import SplitHilite from "./SplitHilite";

export default props => {
  const { ipa, url } = props;

  return (
    <div className="head-space">
      <h3>
        {`English Pronuniciation movie for `}
        <SplitHilite str={ipa} />
      </h3>

      <img className="full-width" src={url} alt={`Pronouncing ${ipa}`} />
    </div>
  );
};
