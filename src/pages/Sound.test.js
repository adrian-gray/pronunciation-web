import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Sound from "./Sound";

afterEach(cleanup);

test("Sound", async () => {
  const props = {};

  const container = shallow(<Sound {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
