import React from "react";
import { Redirect } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  page: theme.page,
  headspace: theme.headspace
}));

function Profile(props) {
  const classes = useStyles(props);
  const { user } = props;

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
}

export default withTheme(Profile);
