import React from "react";

export default (props: { str: string }) => {
  const { str } = props;
  const elements = str.split(/(~)/);
  const arr = [];
  let index = 0;

  do {
    let el = elements.shift();
    if (el === "~") {
      const txt = elements.shift();
      arr.push(
        <span className="hilite" key={`${txt}${index}`}>
          {txt}
        </span>
      );
      elements.shift(); // closing ~
    } else {
      arr.push(<span key={`${el}${index}`}>{el}</span>);
    }
    index++;
  } while (elements.length);
  arr.push(" ");

  return <>{arr}</>;
};
