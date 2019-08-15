import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Profile from "./Profile";

afterEach(cleanup);

test("Profile", async () => {
  const props = {};

  const container = shallow(<Profile {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
