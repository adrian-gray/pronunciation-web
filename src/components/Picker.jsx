import React, { Component } from "react";

import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
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
});

class Picker extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(this.props.index);
  }

  render() {
    const classes = `${this.props.classes.clickable} ${this.props.colour}`;
    return (
      <span className={classes} onClick={this.handleClick}>
        {`${this.props.options[this.props.selected]}`}
      </span>
    );
  }
}

export default withStyles(styles)(Picker);
