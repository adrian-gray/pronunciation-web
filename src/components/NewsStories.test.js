import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import NewsStories from "./NewsStories";

afterEach(cleanup);

test("NewsStories", async () => {
  const props = {};

  const container = shallow(<NewsStories {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
