import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  headspace: theme.headspace,
  blocked: {
    opacity: 0.2
  }
}));

function MemberGate(props) {
  const classes = useStyles(props);

  let display;

  if (props.userAuth) {
    display = props.content;
  } else {
    display = (
      <div>
        <Typography variant="h6" className={classes.headspace} gutterBottom>
          {"Sorry, this interactive activity is for members only."}
        </Typography>
        <div className={classes.blocked}>{props.content}</div>
      </div>
    );
  }

  return display;
}

export default withTheme(MemberGate);
