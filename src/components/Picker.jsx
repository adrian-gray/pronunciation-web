import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  clickable: {
    cursor: "pointer",
    backgroundColor: "#CCC",
    borderRadius: "4px",
    padding: "0.25rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem"
  },
  correct: {
    backgroundColor: "#CCFFCC"
  },
  incorrect: {
    backgroundColor: "#FFCCCC"
  }
}));

function Picker(props) {
  console.log("props.selected", props.selected);
  const classes = useStyles(props);
  const myClasses = `${classes.clickable} ${props.colour}`;

  const handleClick = e => {
    props.handleClick(props.index);
  };

  return (
    <span className={myClasses} onClick={handleClick}>
      {`${props.options[props.selected]}`}
    </span>
  );
}

export default withTheme(Picker);
