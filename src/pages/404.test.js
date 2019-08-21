import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";

import FourOhFour from "./404";

afterEach(cleanup);

test("FourOhFour", async () => {
  const props = {};

  const { container } = render(
    <BrowserRouter>
      <FourOhFour {...props} />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});
