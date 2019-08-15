import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Pending from "./Pending";

afterEach(cleanup);

test("Pending", async () => {
  const props = {};

  const container = shallow(<Pending {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
