import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Tile from "./Tile";

afterEach(cleanup);

test("Tile", async () => {
  const props = {};

  const container = shallow(<Tile {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
