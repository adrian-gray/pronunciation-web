import React from "react";

import Container from "react-bootstrap/Container";

import SplitHilite from "./SplitHilite";

export default props => {
  const { dialogues, ipa } = props;

  const extractLines = dialogue => {
    return dialogue.map((line, index) => {
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

  const expandDialogue = (dialogue, index) => (
    <div className="sub-canvas" key={index}>
      <ul className="list-group">{extractLines(dialogue)}</ul>
    </div>
  );

  const lines = dialogues.map(expandDialogue);

  return (
    <Container>
      <h3>
        {"Short dialogues using "}
        <SplitHilite str={ipa} />
      </h3>
      {lines}
    </Container>
  );
};
