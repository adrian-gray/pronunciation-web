import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Login from "./Login";

afterEach(cleanup);

test("Login", async () => {
  const props = {};

  const container = shallow(<Login {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
