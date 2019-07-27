import React from "react";

import Cell from "./Cell";
import MemberGate from "./MemberGate";
import SplitHilite from "./SplitHilite";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
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
});

class FourInARow extends React.Component {
  constructor(props) {
    super(props);

    const { classes, userAuth, ...other } = props;
    const title = `Select the words that ~DON'T~ have the ${props.tag} – ${props.ipa} sound.`;

    this.state = {
      classes,
      selected: new Array(props.rows.length).fill(-1),
      rowHiliteColor: new Array(props.rows.length),
      title,
      userAuth: userAuth,
      other
    };

    this.buildTable = this.buildTable.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkComplete = this.checkComplete.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.userAuth !== this.state.userAuth) {
      this.setState({ userAuth: nextProps.userAuth });
      return true;
    }
    if (nextState.selected !== this.state.selected) {
      return true;
    }
    return false;
  }

  buildTable() {
    const displayRows = this.props.rows.map((arr, row) => {
      const cells = arr.map((word, column) => {
        const isSelected = this.state.selected[row] === column;
        const cellBG = isSelected ? this.state.rowHiliteColor[row] : null;
        return (
          <Cell
            str={word}
            column={column}
            row={row}
            key={column}
            handleClick={this.handleClick}
            hilite={cellBG}
            {...this.state.other}
          />
        );
      });
      return <TableRow key={row}>{cells}</TableRow>;
    });

    const guide = this.props.example.map((word, i) => {
      const hilite = i + 1 === this.props.exampleHilite ? this.state.classes.selectedBG : null;
      return <Cell str={word} key={i} hilite={hilite} {...this.state.other} />;
    });
    const tableHead = (
      <TableHead className={this.state.classes.headBG}>
        <TableRow>{guide}</TableRow>
      </TableHead>
    );

    const exHeadClass = `${this.state.classes.headspace} ${this.state.classes.center}`;
    return (
      <div>
        <Typography variant="subheading" className={exHeadClass}>
          {"Example"}
        </Typography>
        <Table>
          {tableHead}
          <TableBody>{displayRows}</TableBody>
        </Table>
      </div>
    );
  }

  handleClick(params) {
    if (!this.state.userAuth) return;
    const { column, row } = params;
    const arr = this.state.selected.slice();
    arr[row] = column;
    this.setState({ selected: arr });

    this.checkComplete(arr);
  }

  checkComplete(arr) {
    const rowHiliteColor = this.state.rowHiliteColor.slice();
    arr.forEach((column, row) => {
      if (column > -1) {
        const word = this.props.rows[row][column];
        if (this.props.correct.includes(word)) {
          rowHiliteColor[row] = this.state.classes.correctBG;
        } else {
          rowHiliteColor[row] = this.state.classes.incorrectBG;
        }
      }
    });
    this.setState({ rowHiliteColor });
  }

  render() {
    const content = this.buildTable();

    return (
      <div className={this.state.classes.headspace}>
        <Typography variant="title" gutterBottom>
          {`Four in a row using ${this.props.tag} - `}
          <SplitHilite str={this.props.ipa} />
        </Typography>
        <Typography variant="subheading" gutterBottom>
          <SplitHilite str={this.state.title} />
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          {`Can you spot the difference? In each group of words there are three with the ${
            this.props.tag
          } vowel sound and one with a different vowel sound. Say the words and choose the one that doesn’t sound the same as the others. Advance to the next level with more challenging words. Four in a Row encourages you to identify the differences between words with similar sounding vowels.`}
        </Typography>
        <MemberGate content={content} userAuth={this.state.userAuth} {...this.state.other} />
      </div>
    );
  }
}

export default withStyles(styles)(FourInARow);
