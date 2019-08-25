import React from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import SplitHilite from "./SplitHilite";

export default props => {
  const { ipa, phrases } = props;

  const list = Object.entries(phrases).map((arr, index) => {
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
    <div className="head-space">
      <h3>
        {`Phrases using `}
        <SplitHilite str={ipa} />
      </h3>

      <Container className="sub-canvas">
        <Table>
          <tbody>{list}</tbody>
        </Table>
      </Container>
    </div>
  );
};
