import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Movie from "./Movie";

afterEach(cleanup);

test("Movie", async () => {
  const props = {};

  const container = shallow(<Movie {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
