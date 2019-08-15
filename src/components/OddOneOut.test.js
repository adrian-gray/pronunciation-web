import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import OddOneOut from "./OddOneOut";

afterEach(cleanup);

test("OddOneOut", async () => {
  const props = {};

  const container = shallow(<OddOneOut {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
