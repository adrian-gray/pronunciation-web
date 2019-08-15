import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Home from "./Home";

afterEach(cleanup);

test("Home", async () => {
  const props = {};

  const container = shallow(<Home {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
