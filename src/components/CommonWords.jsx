import React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  withStyles
} from "@material-ui/core";

import SplitHilite from "./SplitHilite";

const styles = theme => ({
  cell: {
    paddingLeft: 12,
    paddingRight: 12
  },
  largeText: theme.largeText,
  headspace: theme.headspace
});

const CommonWords = props => {
  const { classes, ipa, words } = props;
  const cells = words.map((el, index) => (
    <TableCell className={classes.cell} key={index}>
      <Typography className={classes.largeText}>
        <SplitHilite str={el} key={el} />
      </Typography>
    </TableCell>
  ));

  let currentRow = 0;
  let cellCount = 0;
  const rows = [];
  do {
    rows[currentRow] = (
      <TableRow key={currentRow}>
        {cells[cellCount++]}
        {cells[cellCount] ? cells[cellCount++] : null}
        {cells[cellCount] ? cells[cellCount++] : null}
      </TableRow>
    );
    currentRow++;
  } while (cellCount < cells.length);

  return (
    <div className={classes.headspace}>
      <Typography variant="title" gutterBottom>
        {"Common words with "}
        <SplitHilite str={ipa} />
      </Typography>
      <Paper>
        <Table>
          <TableBody>{rows}</TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(CommonWords);
