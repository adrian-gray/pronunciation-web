import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Phoneme from "./Phoneme";

afterEach(cleanup);

test("Phoneme", async () => {
  const props = {};

  const container = shallow(<Phoneme {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
