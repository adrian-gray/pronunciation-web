import React from "react";
import { capitalise } from "./../utils";

import { Paper, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  headspace: theme.headspace,
  largeText: theme.largeText,
  personalSpace: theme.personalSpace
});

const Pending = props => {
  const { classes, name } = props;

  return (
    <div className={classes.headspace}>
      <Paper>
        <Typography variant="title" className={classes.personalSpace} gutterBottom>
          {`${capitalise(name)} - activity coming soon`}
        </Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Pending);
