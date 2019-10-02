import React, { useState } from "react";

import Table from "react-bootstrap/Table";

import Cell from "./../components/Cell";
import MemberGate from "./../components/MemberGate";
import SplitHilite from "./../components/SplitHilite";

interface IOddOneOutProps {
  isUserAuth: boolean;
  tag: string;
  ipa: string;
  example: string[];
  exampleHilite: number;
  rows: string[][];
  correct: string[];
}

export default (props: IOddOneOutProps) => {
  const title = `Select the words that ~DON'T~ have the ${props.tag} – ${props.ipa} sound.`;

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
            handleClick={handleClick}
            hilite={cellBG}
            key={word}
          />
        );
      });
      return <tr key={row}>{cells}</tr>;
    });

    const guide = props.example.map((word, i) => {
      const hilite = i + 1 === props.exampleHilite ? "selected-bg" : null;
      // TODO why am I passing extra data here?
      return (
        <Cell
          str={word}
          key={i}
          hilite={hilite}
          row={null}
          column={null}
          handleClick={(): void => null}
        />
      );
    });

    return (
      <div>
        <h4 className="head=space text-center">{"Example"}</h4>
        <Table>
          <thead className="th-bg">
            <tr>{guide}</tr>
          </thead>
          <tbody>{displayRows}</tbody>
        </Table>
      </div>
    );
  }

  function handleClick(params: { column: number; row: number }) {
    if (!props.isUserAuth) return;
    const { column, row } = params;
    const arr = selected.slice();
    arr[row] = column;
    setSelected(arr);

    checkComplete(arr);
  }

  function checkComplete(arr: number[]) {
    const hiliteColor = rowHiliteColor.slice();
    arr.forEach((column: number, row: number) => {
      if (column > -1) {
        const word = props.rows[row][column];
        if (props.correct.includes(word)) {
          hiliteColor[row] = true;
        } else {
          hiliteColor[row] = false;
        }
      }
    });
    setRowHiliteColor(hiliteColor);
  }

  const content = buildTable();

  return (
    <div className="head-space">
      <h3>
        {`The Odd One Out using ${props.tag} - `}
        <SplitHilite str={props.ipa} />
      </h3>
      <h4>
        <SplitHilite str={title} />
      </h4>
      <br />
      <p>
        {`Can you spot the difference? In each group of words there are three with the ${props.tag} vowel sound and one with a different vowel sound. Say the words and choose the one that doesn’t sound the same as the others. Advance to the next level with more challenging words. Odd One Out encourages you to identify the differences between words with similar sounding vowels.`}
      </p>
      <MemberGate content={content} isUserAuth={props.isUserAuth} />
    </div>
  );
};
