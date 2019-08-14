import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import MinimalPairs from "./MinimalPairs";

afterEach(cleanup);

test("MinimalPairs", async () => {
  const props = {};

  const container = shallow(<MinimalPairs {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
