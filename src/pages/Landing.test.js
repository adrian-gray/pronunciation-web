import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";

import Landing from "./Landing";

afterEach(cleanup);

test("Landing", async () => {
  const props = {};

  const { container } = render(
    <BrowserRouter>
      <Landing {...props} />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});
