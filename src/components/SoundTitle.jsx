import React from "react";

import Typography from "@material-ui/core/Typography";
import { withTheme } from "@material-ui/styles";

import SplitHilite from "./SplitHilite";

const SoundTitle = props => {
  const { phoneme, str } = props;

  return (
    <Typography variant="h3" gutterBottom>
      <SplitHilite str={phoneme} /> - <SplitHilite str={str} />
    </Typography>
  );
};

export default withTheme(SoundTitle);
