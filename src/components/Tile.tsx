import React from "react";

export default (props: {
  index: number;
  isCorrect: boolean;
  word: string;
  handleClick: any;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    props.handleClick(props.index);
  };

  const paperClasses = ["tile"];

  let correctStatus = null;
  if (props.isCorrect === undefined) {
    paperClasses.push("default-bg");
  } else if (props.isCorrect) {
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
