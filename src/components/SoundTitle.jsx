import React from "react";

import Typography from "@material-ui/core/Typography";

import SplitHilite from "./SplitHilite";

const SoundTitle = props => {
  const { phoneme, str } = props;

  return (
    <Typography variant="display2" gutterBottom>
      <SplitHilite str={phoneme} /> - <SplitHilite str={str} />
    </Typography>
  );
};

export default SoundTitle;
