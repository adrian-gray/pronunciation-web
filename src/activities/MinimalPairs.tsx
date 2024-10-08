import React from "react";

import Table from "react-bootstrap/Table";

import SplitHilite from "./../components/SplitHilite";

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
        <p className="largeText right-align right-pad">
          <SplitHilite str={pair[0]} />
        </p>
      </td>
      <td className="cell" key={1}>
        <p className="largeText left-align left-pad">
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
      <div>
        <Table>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
};
