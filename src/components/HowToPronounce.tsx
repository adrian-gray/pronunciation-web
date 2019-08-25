import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SplitHilite from "./SplitHilite";

export default props => {
  const { arr, image, ipa } = props;
  const { url, alt, title } = image;

  const list = arr.map((el, i) => <li key={i}>{el}</li>);

  return (
    <div className="headspace">
      <h3>
        {"How to pronounce "}
        <SplitHilite str={ipa} />
      </h3>

      <Container className="sub-canvas">
        <Row>
          <Col>
            <div className="padded">
              <img className="fill-width" src={url} title={title} alt={alt} />
              <h5>{title}</h5>
            </div>
          </Col>
          <Col>
            <ul>{list}</ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
