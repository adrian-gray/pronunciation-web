import React from "react";
import { Redirect } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
  page: theme.page,
  headspace: theme.headspace
});

const Profile = props => {
  const { classes, user } = props;

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <Paper className={classes.page}>
      <div className={classes.headspace}>
        <Typography variant="title" gutterBottom>
          {`Your profile`}
        </Typography>
        <Typography>{user.displayName}</Typography>
        <div>
          <img width="100px" src={user.photoURL} />
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(Profile);
