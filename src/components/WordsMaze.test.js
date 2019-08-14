import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import WordsMaze from "./WordsMaze";

afterEach(cleanup);

test("WordsMaze", async () => {
  const props = {};

  const container = shallow(<WordsMaze {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
