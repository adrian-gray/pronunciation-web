import React from "react";
import { Link } from "react-router-dom";

import SplitHilite from "./../components/SplitHilite";

export default (props: { phoneme: string; str: string }) => {
  const { phoneme, str } = props;

  return (
    <h2>
      <Link to={{ pathname: `/home` }} className="undecorated">
        {"Home"}
      </Link>
      <SplitHilite str={phoneme} /> - <SplitHilite str={str} />
    </h2>
  );
};
