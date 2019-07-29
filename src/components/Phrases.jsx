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
  subCanvas: theme.subCanvas,
  largeText: theme.largeText
}));

const Phrases = props => {
  const classes = useStyles(props);

  const { ipa, phrases } = props;

  const list = Object.entries(phrases).map((arr, index) => {
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
        {`Phrases using `}
        <SplitHilite str={ipa} />
      </Typography>

      <Paper className={classes.subCanvas}>
        <Table>
          <TableBody>{list}</TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default withTheme(Phrases);
