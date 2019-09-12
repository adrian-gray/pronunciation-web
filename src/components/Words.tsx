import React from "react";

import Table from "react-bootstrap/Table";

import SplitHilite from "./SplitHilite";

export default (props: { ipa: string; words: string[] }) => {
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
    <div className="headspace">
      <h3>
        {`Words using `}
        <SplitHilite str={ipa} />
      </h3>

      <div>
        <Table>
          <tbody>{list}</tbody>
        </Table>
      </div>
    </div>
  );
};
