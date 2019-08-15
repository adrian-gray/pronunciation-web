import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import SEO from "./SEO";

afterEach(cleanup);

test("SEO", async () => {
  const props = {};

  const container = shallow(<SEO {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
