import React from "react";

import SplitHilite from "./SplitHilite";

import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  headspace: theme.headspace,
  fullWidth: theme.fullWidth
});

const Movie = props => {
  const { classes, ipa, url } = props;

  return (
    <div className={classes.headspace}>
      <Typography variant="title" gutterBottom>
        {`English Pronuniciation movie for `}
        <SplitHilite str={ipa} />
      </Typography>

      <img className={classes.fullWidth} src={url} alt={`Pronouncing ${ipa}`} />
    </div>
  );
};

export default withStyles(styles)(Movie);
