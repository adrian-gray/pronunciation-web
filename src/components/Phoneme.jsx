import React from "react";
import { Link } from "react-router-dom";
import SplitHilite from "./SplitHilite";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
  root: {
    margin: 20,
    padding: 20,
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    "&:hover": {
      background: "#F3F3FF"
    }
  },
  words: {
    fontSize: "1.1em",
    wordSpacing: "1.1em"
  },
  links: {
    textDecoration: "none"
  }
});

const Phoneme = props => {
  const { classes, phoneme, ipa, tag, title, words } = props;
  const displayTitle = (
    <span>
      <SplitHilite str={ipa} /> – <SplitHilite str={title} />
    </span>
  );
  const wordList = words.slice(0, 6).map(word => <SplitHilite str={word} key={word} />);

  return (
    <Paper className={classes.root}>
      <Link to={{ pathname: `/sound/${phoneme}` }} className={classes.links}>
        <div>
          <Typography variant="headline" gutterBottom>
            {displayTitle}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {"Example words containing short ‘a’"}
          </Typography>
          <Typography className={classes.words} variant="body2" gutterBottom>
            {wordList}
          </Typography>
          <Typography variant="subheading" gutterBottom>
            {`Click to learn more about the ${tag} sound`}
          </Typography>
        </div>
      </Link>
    </Paper>
  );
};

export default withStyles(styles)(Phoneme);
