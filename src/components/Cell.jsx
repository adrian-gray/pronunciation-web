import React from "react";
import SplitHilite from "./SplitHilite";

import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  cell: theme.cell,
  largeText: theme.largeText
}));

function Cell(props) {
  const classes = useStyles(props);

  const handleClick = e => {
    e.preventDefault();
    if (!props.handleClick) return;
    props.handleClick({
      column: props.column,
      row: props.row,
      str: props.str
    });
  };

  const { hilite, key, str } = props;
  const cellClasses = hilite ? `${classes.cell} ${hilite}` : classes.cell;

  return (
    <TableCell className={cellClasses} key={key} onClick={handleClick}>
      <Typography>
        <SplitHilite str={str} />
      </Typography>
    </TableCell>
  );
}

export default withTheme(Cell);
