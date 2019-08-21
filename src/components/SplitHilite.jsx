import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  hilite: theme.hilite
}));

const SplitHilite = props => {
  const classes = useStyles(props);

  const { str } = props;
  const elements = str.split(/(~)/);
  const arr = [];
  let index = 0;

  do {
    let el = elements.shift();
    if (el === "~") {
      const txt = elements.shift();
      arr.push(
        <span className={classes.hilite} key={`${txt}${index}`}>
          {txt}
        </span>
      );
      elements.shift(); // closing ~
    } else {
      arr.push(<span key={`${el}${index}`}>{el}</span>);
    }
    index++;
  } while (elements.length);
  arr.push(" ");

  return arr;
};

export default withTheme(SplitHilite);
