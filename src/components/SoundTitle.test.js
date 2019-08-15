import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import SoundTitle from "./SoundTitle";

afterEach(cleanup);

test("SoundTitle", async () => {
  const props = {};

  const container = shallow(<SoundTitle {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
