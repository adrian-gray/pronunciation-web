import React from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import SplitHilite from "./SplitHilite";

export default props => {
  const { ipa, words } = props;
  const list = Object.entries(words).map((arr, index) => {
    return (
      <tr key={index}>
        <td>
          <p className="large-text">
            <SplitHilite str={arr[0]} />
          </p>
        </td>
        <td>
          <p className="large-text">
            <SplitHilite str={arr[1]} />
          </p>
        </td>
      </tr>
    );
  });

  return (
    <Container className="headspace">
      <h4>
        {`Words using `}
        <SplitHilite str={ipa} />
      </h4>

      <Container>
        <Table>
          <tbody>{list}</tbody>
        </Table>
      </Container>
    </Container>
  );
};
