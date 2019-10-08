import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SplitHilite from "./../components/SplitHilite";

export default (props: {
  arr: string[];
  ipa: string;
  image: { url: string; alt: string; title: string };
}) => {
  const { arr, image, ipa } = props;
  const { url, alt, title } = image;

  const list = arr.map((el, i) => (
    <li key={i} className="list-group-item">
      {el}
    </li>
  ));

  return (
    <div className="headspace">
      <h3>
        {"How to pronounce "}
        <SplitHilite str={ipa} />
      </h3>

      <div className="sub-canvas">
        <Row>
          <Col>
            <div className="padded">
              <h5>{title}</h5>
            </div>
          </Col>
          <Col className="align-self-center">
            <ul className="list-group">{list}</ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};
