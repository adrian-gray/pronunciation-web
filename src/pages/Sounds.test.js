import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Sounds from "./Sounds";

afterEach(cleanup);

test("Sounds", async () => {
  const props = {};

  const container = shallow(<Sounds {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
