import React from "react";

import Container from "react-bootstrap/Container";

import { capitalise } from "./../utils/utils";

export default props => {
  const { tag, tongueTwisters } = props;

  const twisters = tongueTwisters.map((line, index) => (
    <div className="personal-space sub-canvas" key={index}>
      <p>{line}</p>
    </div>
  ));

  return (
    <div className="head-space">
      <h3>{`${capitalise(tag)} Tongue Twisters`}</h3>
      <p>
        {`Enjoy the challenge of Tongue Twisters. There are three tongue twisters to perfect the ${tag} sound. Each tongue twister consists of commonly used English words and phrases for you to practice the ${tag} sound. How fast can you say each ${tag} tongue twister? Try to say each one as many times as you can, no mistakes. Record yourself and post your attempt to enter the challenge.`}
      </p>
      {twisters}
    </div>
  );
};
