import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  largeText: theme.largeText,
  correctBG: theme.correctBG,
  incorrectBG: theme.incorrectBG,
  left: {
    ...theme.subCanvas,
    float: "left",
    margin: "2rem",
    padding: "1rem"
  },
  clickable: {
    cursor: "pointer"
  }
}));

function Tile(props) {
  const classes = useStyles(props);

  const handleClick = e => {
    props.handleClick(props.index);
  };

  const paperClasses = [classes.left];

  let correctStatus = null;
  if (props.isCorrect) {
    paperClasses.push(classes.correctBG);
    correctStatus = "correctBG";
  } else if (props.isCorrect === false) {
    paperClasses.push(classes.incorrectBG);
    correctStatus = "incorrectBG";
    console.log("DERP");
  }

  return (
    <div className={classes.clickable} onClick={handleClick}>
      <Paper className={paperClasses.join(" ")}>
        <Typography className={classes.largeText}>
          <span className={classes[correctStatus]}>{props.word}</span>
        </Typography>
      </Paper>
    </div>
  );
}

export default withTheme(Tile);
