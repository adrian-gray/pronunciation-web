import React from "react";

import SplitHilite from "./../components/SplitHilite";

export default (props: {
  dialogues: string[][];
  ipa: string;
  isUserAuth: boolean;
}) => {
  const { dialogues, ipa } = props;

  const extractLines = (dialogue: string[]) => {
    return dialogue.map((line: string, index: number) => {
      let style = "text-left";
      if (index % 2) style = "text-right";
      const classes = `tight-text list-group-item ${style}`;

      return (
        <li className={classes} key={index}>
          <SplitHilite str={line} />
        </li>
      );
    });
  };

  const expandDialogue = (dialogue: string[], index: number) => (
    <div className="sub-canvas" key={index}>
      <ul className="list-group">{extractLines(dialogue)}</ul>
    </div>
  );

  const lines = dialogues.map(expandDialogue);

  return (
    <div className="headspace">
      <h3>
        {"Short dialogues using "}
        <SplitHilite str={ipa} />
      </h3>
      {lines}
    </div>
  );
};
