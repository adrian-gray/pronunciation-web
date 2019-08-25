import React from "react";

import Container from "react-bootstrap/Container";

import { capitalise } from "./../utils/utils";

export default props => {
  const { name } = props;

  return (
    <div className="head-space">
      <Container>
        <h3 className="personals-pace">
          {`${capitalise(name)} - activity coming soon`}
        </h3>
      </Container>
    </div>
  );
};
