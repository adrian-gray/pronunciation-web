import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";

import Login from "./Login";

afterEach(cleanup);

test("Login", async () => {
  const props = {};

  const { container } = render(
    <BrowserRouter>
      <Login {...props} />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});
