import React, { useState } from "react";
import SplitHilite from "./SplitHilite";

// TODO WTF have I needed to add row/column/onClick
export default (props: {
  str: string;
  row: number;
  column: number;
  hilite: string;
  handleClick: any;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!props.handleClick) return;
    props.handleClick({
      column: props.column,
      row: props.row,
      str: props.str
    });
  };

  const cellClasses = props.hilite ? "cell cell-hilite-bg" : "cell";

  let textClass;
  if (props.hilite !== null) {
    textClass = props.hilite ? "correct-text" : "incorrect-text";
  }

  return (
    <td className={cellClasses} key={props.column} onClick={handleClick}>
      <p className={textClass}>{props.str}</p>
    </td>
  );
};
