import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";

import Sounds from "./Sounds";

afterEach(cleanup);

test("Sounds", async () => {
  const props = {};

  const { container } = render(
    <BrowserRouter>
      <Sounds {...props} />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});
