import React from "react";

import SplitHilite from "./SplitHilite";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  headspace: theme.headspace,
  fullWidth: theme.fullWidth
}));

const Movie = props => {
  const classes = useStyles(props);
  const { ipa, url } = props;

  return (
    <div className={classes.headspace}>
      <Typography variant="h5" gutterBottom>
        {`English Pronuniciation movie for `}
        <SplitHilite str={ipa} />
      </Typography>

      <img className={classes.fullWidth} src={url} alt={`Pronouncing ${ipa}`} />
    </div>
  );
};

export default withTheme(Movie);
