import React from "react";

export default (props: {
  index: number;
  colour: string;
  options: string[];
  selected: number;
  handleClick: any;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    props.handleClick(props.index);
  };

  return (
    <span className={`clickable ${props.colour}`} onClick={handleClick}>
      {`${props.options[props.selected]}`}
    </span>
  );
};
