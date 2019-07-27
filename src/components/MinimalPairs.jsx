import React from "react";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

import SplitHilite from "./SplitHilite";

const styles = theme => ({
  largeText: theme.largeText,
  headspace: theme.headspace,
  cell: theme.cell
});

const MinimalPairs = props => {
  const { classes, ipa, pairs, tag } = props;

  const rows = pairs.map((pair, key) => (
    <TableRow key={key}>
      <TableCell className={classes.cell} key={0}>
        <Typography className={classes.largeText}>
          <SplitHilite str={pair[0]} />
        </Typography>
      </TableCell>
      <TableCell className={classes.cell} key={1}>
        <Typography className={classes.largeText}>
          <SplitHilite str={pair[1]} />
        </Typography>
      </TableCell>
    </TableRow>
  ));

  return (
    <div className={classes.headspace}>
      <Typography variant="title" gutterBottom>
        {`English  minimal pairs with ${tag} - `}
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

export default withStyles(styles)(MinimalPairs);
