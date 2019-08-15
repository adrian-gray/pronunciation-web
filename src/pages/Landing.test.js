import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Landing from "./Landing";

afterEach(cleanup);

test("Landing", async () => {
  const props = {};

  const container = shallow(<Landing {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
