import React from "react";

import SplitHilite from "./SplitHilite";

import Container from "react-bootstrap/Container";

export default (props: { ipa: string; sentences: string[] }) => {
  const { ipa, sentences } = props;

  const lines = sentences.map((line: string, index: number) => (
    <Container className="sub-canvas personal-space" key={index}>
      <p className="no-margin-bottom">{line}</p>
    </Container>
  ));

  return (
    <div className="personal-space">
      <h3>
        {"Say the "}
        <SplitHilite str={ipa} />
        {" sentences"}
      </h3>
      {lines}
    </div>
  );
};
