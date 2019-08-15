import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import SayTheSentences from "./SayTheSentences";

afterEach(cleanup);

test("SayTheSentences", async () => {
  const props = {};

  const container = shallow(<SayTheSentences {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
