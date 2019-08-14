import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Words from "./Words";

afterEach(cleanup);

test("Words", async () => {
  const props = {};

  const container = shallow(<Words {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
