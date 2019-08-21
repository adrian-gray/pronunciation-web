import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

import SplitHilite from "./SplitHilite";

const useStyles = makeStyles(theme => ({
  headspace: theme.headspace,
  largeText: theme.largeText,
  subCanvas: theme.subCanvas,
  left: {
    textAlign: "left"
  },
  right: {
    textAlign: "right"
  },
  tight: {
    paddingTop: 0,
    paddingBottom: 0,
    borderBottom: "1px solid #EEE"
  }
}));

const Dialogues = props => {
  const classes = useStyles(props);
  const { dialogues, ipa } = props;

  const extractLines = (dialogue, index) => {
    return dialogue.map((line, index) => {
      let style = classes.left;
      if (index % 2) style = classes.right;

      return (
        <ListItem className={classes.tight} key={index}>
          <ListItemText className={style}>
            <SplitHilite str={line} />
          </ListItemText>
        </ListItem>
      );
    });
  };

  const expandDialogue = (dialogue, index) => (
    <Paper className={classes.subCanvas} key={index}>
      <List>{extractLines(dialogue)}</List>
    </Paper>
  );

  const lines = dialogues.map(expandDialogue);

  return (
    <div className={classes.headspace}>
      <Typography variant="h5" gutterBottom>
        {"Short dialogues using "}
        <SplitHilite str={ipa} />
      </Typography>
      {lines}
    </div>
  );
};

export default withTheme(Dialogues);
