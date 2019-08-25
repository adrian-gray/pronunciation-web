import React from "react";

export default props => {
  const handleClick = e => {
    props.handleClick(props.index);
  };

  const paperClasses = ["tile"];

  let correctStatus = null;
  if (props.isCorrect) {
    paperClasses.push("correct-bg");
    correctStatus = "correct-bg";
  } else if (props.isCorrect === false) {
    paperClasses.push("incorrect-bg");
    correctStatus = "incorrect-bg";
  }

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <div className={paperClasses.join(" ")}>
        <p className="large-text">
          <span className={correctStatus}>{props.word}</span>
        </p>
      </div>
    </div>
  );
};
