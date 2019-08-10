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
  headspace: theme.headspace,
  largeText: theme.largeText,
  subCanvas: theme.subCanvas
}));

function Words(props) {
  const classes = useStyles(props);
  const { ipa, words } = props;
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
      <Typography variant="h5" gutterBottom>
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
}

export default withTheme(Words);
