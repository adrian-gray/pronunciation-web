import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Phrases from "./Phrases";

afterEach(cleanup);

test("Phrases", async () => {
  const props = {};

  const container = shallow(<Phrases {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
