import React from "react";

export default props => {
  const handleClick = e => {
    props.handleClick(props.index);
  };

  return (
    <span className={`clickable ${props.colour}`} onClick={handleClick}>
      {`${props.options[props.selected]}`}
    </span>
  );
};
