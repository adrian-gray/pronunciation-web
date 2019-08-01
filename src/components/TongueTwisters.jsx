import React from "react";

import { capitalise } from "./../utils/utils";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  headspace: theme.headspace,
  largeText: theme.largeText,
  spacing: {
    padding: "1rem",
    margin: "1rem"
  }
}));

function TongueTwisters(props) {
  const classes = useStyles(props);
  const { tag, tongueTwisters } = props;

  const twisters = tongueTwisters.map((line, index) => (
    <Paper className={classes.spacing} key={index}>
      <Typography>{line}</Typography>
    </Paper>
  ));

  return (
    <div className={classes.headspace}>
      <Typography variant="h5" gutterBottom>
        {`${capitalise(tag)} Tongue Twisters`}
      </Typography>
      <Typography>
        {`Enjoy the challenge of Tongue Twisters. There are three tongue twisters to perfect the ${tag} sound. Each tongue twister consists of commonly used English words and phrases for you to practice the ${tag} sound. How fast can you say each ${tag} tongue twister? Try to say each one as many times as you can, no mistakes. Record yourself and post your attempt to enter the challenge.`}
      </Typography>
      {twisters}
    </div>
  );
}

export default withTheme(TongueTwisters);
