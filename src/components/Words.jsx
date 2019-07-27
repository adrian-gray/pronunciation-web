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
  headspace: theme.headspace,
  largeText: theme.largeText,
  subCanvas: theme.subCanvas
});

const Words = props => {
  const { classes, ipa, words } = props;
  const list = Object.entries(words).map((arr, index) => {
    return (
      <TableRow key={index}>
        <TableCell>
          <Typography className={classes.largeText}>
            <SplitHilite str={arr[0]} />
          </Typography>
        </TableCell>
        <TableCell>
          <Typography className={classes.largeText}>
            <SplitHilite str={arr[1]} />
          </Typography>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div className={classes.headspace}>
      <Typography variant="title" gutterBottom>
        {`Words using `}
        <SplitHilite str={ipa} />
      </Typography>

      <Paper className={classes.subCanvas}>
        <Table className={classes.root}>
          <TableBody>{list}</TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Words);
