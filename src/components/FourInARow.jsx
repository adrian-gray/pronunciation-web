import React, { useState } from "react";

import Cell from "./Cell";
import MemberGate from "./MemberGate";
import SplitHilite from "./SplitHilite";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  largeText: theme.largeText,
  headspace: theme.headspace,
  center: theme.center,
  cell: theme.cell,
  cellHiliteBG: theme.cellHiliteBG,
  correctBG: theme.correctBG,
  incorrectBG: theme.incorrectBG,
  headBG: {
    background: "#EEE"
  },
  selectedBG: {
    background: "#CCC"
  }
}));

function FourInARow(props) {
  const classes = useStyles(props);

  const title = `Select the words that ~DON'T~ have the ${props.tag} – ${
    props.ipa
  } sound.`;

  const [rowHiliteColor, setRowHiliteColor] = useState(
    new Array(props.rows.length)
  );
  const [selected, setSelected] = useState(
    new Array(props.rows.length).fill(-1)
  );

  function buildTable() {
    const displayRows = props.rows.map((arr, row) => {
      const cells = arr.map((word, column) => {
        const isSelected = selected[row] === column;
        const cellBG = isSelected ? rowHiliteColor[row] : null;
        return (
          <Cell
            str={word}
            column={column}
            row={row}
            key={column}
            handleClick={handleClick}
            hilite={cellBG}
          />
        );
      });
      return <TableRow key={row}>{cells}</TableRow>;
    });

    const guide = props.example.map((word, i) => {
      const hilite = i + 1 === props.exampleHilite ? classes.selectedBG : null;
      return <Cell str={word} key={i} hilite={hilite} />;
    });
    const tableHead = (
      <TableHead className={classes.headBG}>
        <TableRow>{guide}</TableRow>
      </TableHead>
    );

    const exHeadClass = `${classes.headspace} ${classes.center}`;
    return (
      <div>
        <Typography variant="h6" className={exHeadClass}>
          {"Example"}
        </Typography>
        <Table>
          {tableHead}
          <TableBody>{displayRows}</TableBody>
        </Table>
      </div>
    );
  }

  function handleClick(params) {
    if (!props.userAuth) return;
    const { column, row } = params;
    const arr = selected.slice();
    arr[row] = column;
    setSelected(arr);

    checkComplete(arr);
  }

  function checkComplete(arr) {
    const hiliteColor = rowHiliteColor.slice();
    arr.forEach((column, row) => {
      if (column > -1) {
        const word = props.rows[row][column];
        if (props.correct.includes(word)) {
          hiliteColor[row] = classes.correctBG;
        } else {
          hiliteColor[row] = classes.incorrectBG;
        }
      }
    });
    setRowHiliteColor(hiliteColor);
  }

  const content = buildTable();

  return (
    <div className={classes.headspace}>
      <Typography variant="h5" gutterBottom>
        {`Four in a row using ${props.tag} - `}
        <SplitHilite str={props.ipa} />
      </Typography>
      <Typography variant="h6" gutterBottom>
        <SplitHilite str={title} />
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom>
        {`Can you spot the difference? In each group of words there are three with the ${
          props.tag
        } vowel sound and one with a different vowel sound. Say the words and choose the one that doesn’t sound the same as the others. Advance to the next level with more challenging words. Four in a Row encourages you to identify the differences between words with similar sounding vowels.`}
      </Typography>
      <MemberGate content={content} userAuth={props.userAuth} />
    </div>
  );
}

export default withTheme(FourInARow);
