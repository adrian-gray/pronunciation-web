import React from "react";
import { capitalise } from "./../utils";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  headspace: theme.headspace,
  largeText: theme.largeText,
  personalSpace: theme.personalSpace
}));

function Pending(props) {
  const classes = useStyles(props);
  const { name } = props;

  return (
    <div className={classes.headspace}>
      <Paper>
        <Typography variant="h5" className={classes.personalSpace} gutterBottom>
          {`${capitalise(name)} - activity coming soon`}
        </Typography>
      </Paper>
    </div>
  );
}

export default withTheme(Pending);
