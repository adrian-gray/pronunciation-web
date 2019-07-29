import React from "react";

import SplitHilite from "./SplitHilite";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  headspace: theme.headspace,
  largeText: theme.largeText,
  personalSpace: {
    padding: "1em",
    margin: "1em"
  }
}));

function TongueTwisters(props) {
  const classes = useStyles(props);
  const { ipa, sentences } = props;

  const lines = sentences.map((line, index) => (
    <Paper className={classes.personalSpace} key={index}>
      <Typography>{line}</Typography>
    </Paper>
  ));

  return (
    <div className={classes.personalSpace}>
      <Typography variant="h5" gutterBottom>
        {"Say the "}
        <SplitHilite str={ipa} />
        {" sentences"}
      </Typography>
      {lines}
    </div>
  );
}

export default withTheme(TongueTwisters);
