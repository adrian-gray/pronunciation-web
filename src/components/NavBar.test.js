import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import NavBar from "./NavBar";

afterEach(cleanup);

test("NavBar", async () => {
  const props = {};

  const container = shallow(<NavBar {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
