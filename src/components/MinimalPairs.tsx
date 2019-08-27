import React from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import SplitHilite from "./SplitHilite";

export default (props: {
  ipa: string;
  pairs: string[][];
  tag: string;
  isUserAuth: boolean;
}) => {
  const { ipa, pairs, tag } = props;

  const rows = pairs.map((pair, key) => (
    <tr key={key}>
      <td className="cell" key={0}>
        <p className="largeText">
          <SplitHilite str={pair[0]} />
        </p>
      </td>
      <td className="cell" key={1}>
        <p className="largeText">
          <SplitHilite str={pair[1]} />
        </p>
      </td>
    </tr>
  ));

  return (
    <div className="headspace">
      <h3>
        {`English  minimal pairs with ${tag} - `}
        <SplitHilite str={ipa} />
      </h3>
      <Container>
        <Table>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
    </div>
  );
};
