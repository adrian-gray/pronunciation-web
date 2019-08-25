import React from "react";

export default props => {
  let display;

  if (props.userAuth) {
    display = props.content;
  } else {
    display = (
      <div>
        <h4 className="head-space">
          {"Sorry, this interactive activity is for members only."}
        </h4>
        <div className="blocked">{props.content}</div>
      </div>
    );
  }

  return display;
};
