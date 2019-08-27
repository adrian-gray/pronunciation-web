import React from "react";
import SplitHilite from "./SplitHilite";

// TODO WTF have I needed to add row/column/onClick
export default (props: {
  str: string;
  row: number;
  column: number;
  hilite: string;
  handleClick: any;
  className?: string;
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
