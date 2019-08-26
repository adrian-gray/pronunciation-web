import React from "react";
import { IFindTheWordsProps } from "./../../@types/PronounceWeb";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import SplitHilite from "./SplitHilite";

export default (props: IFindTheWordsProps) => {
  const { ipa, words } = props;
  const cells = words.map((el: string, index: number) => (
    <td className="cell padded-cell" key={index}>
      <p className="large-text">
        <SplitHilite str={el} key={el} />
      </p>
    </td>
  ));

  let currentRow = 0;
  let cellCount = 0;
  const rows = [];
  do {
    rows[currentRow] = (
      <tr key={currentRow}>
        {cells[cellCount++]}
        {cells[cellCount] ? cells[cellCount++] : null}
        {cells[cellCount] ? cells[cellCount++] : null}
      </tr>
    );
    currentRow++;
  } while (cellCount < cells.length);

  return (
    <Container className="headspace">
      <h3>
        {"Common words with "}
        <SplitHilite str={ipa} />
      </h3>
      <div className="sub-canvas">
        <Table>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </Container>
  );
};
