import React from "react";

import SplitHilite from "./../components/SplitHilite";

export default (props: { phoneme: string; str: string }) => {
  const { phoneme, str } = props;

  return (
    <h3>
      <SplitHilite str={phoneme} /> - <SplitHilite str={str} />
    </h3>
  );
};
