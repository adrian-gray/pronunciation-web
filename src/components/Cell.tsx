import React from "react";
import SplitHilite from "./SplitHilite";

export default props => {
  const handleClick = e => {
    e.preventDefault();
    if (!props.handleClick) return;
    props.handleClick({
      column: props.column,
      row: props.row,
      str: props.str
    });
  };

  const { hilite, str } = props;
  const cellClasses = hilite ? `cell hilite` : "cell";

  return (
    <td className={cellClasses} key={props.column} onClick={handleClick}>
      <p>
        <SplitHilite str={str} />
      </p>
    </td>
  );
};
