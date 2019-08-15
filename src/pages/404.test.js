import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import FourOhFour from "./404";

afterEach(cleanup);

test("FourOhFour", async () => {
  const props = {};

  const container = shallow(<FourOhFour {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
