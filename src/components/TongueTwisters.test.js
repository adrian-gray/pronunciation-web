import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import TongueTwisters from "./TongueTwisters";

afterEach(cleanup);

test("TongueTwisters", async () => {
  const props = {};

  const container = shallow(<TongueTwisters {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
