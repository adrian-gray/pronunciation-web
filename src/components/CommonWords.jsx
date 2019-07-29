import React from "react";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

import SplitHilite from "./SplitHilite";

const useStyles = makeStyles(theme => ({
  cell: {
    paddingLeft: 12,
    paddingRight: 12
  },
  largeText: theme.largeText,
  headspace: theme.headspace
}));

function CommonWords(props) {
  const classes = useStyles(props);
  const { ipa, words } = props;
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
      <Typography variant="h5" gutterBottom>
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
}

export default withTheme(CommonWords);
