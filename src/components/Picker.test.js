import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Picker from "./Picker";

afterEach(cleanup);

test("Picker", async () => {
  const props = {};

  const container = shallow(<Picker {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
