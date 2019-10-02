import React from "react";
import { Link } from "react-router-dom";

import SplitHilite from "./../components/SplitHilite";

export default (props: {
  phoneme: string;
  ipa: string;
  tag: string;
  title: string;
  words: string[];
}) => {
  const { phoneme, ipa, tag, title, words } = props;
  const displayTitle = (
    <span>
      <SplitHilite str={ipa} /> – <SplitHilite str={title} />
    </span>
  );
  const wordList = words
    .slice(0, 6)
    .map((word: string) => <SplitHilite str={word} key={word} />);

  return (
    <div className="headspace">
      <div className="mini-canvas">
        <h3>{displayTitle}</h3>
        <p>{"Example words containing short ‘a’"}</p>
        <p className="larger-text">{wordList}</p>
        <Link to={{ pathname: `/sound/${phoneme}` }} className="undecorated">
          <h5>{`Click to learn more about the ${tag} sound`}</h5>
        </Link>
      </div>
    </div>
  );
};
