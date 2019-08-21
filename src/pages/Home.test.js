import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";

import Home from "./Home";

afterEach(cleanup);

test("Home", async () => {
  const props = {};

  const { container } = render(
    <BrowserRouter>
      <Home {...props} />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});
