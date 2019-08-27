import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";

import NavBar from "./NavBar";

afterEach(cleanup);

test("NavBar", async () => {
  const props = {
    user: {
      displayName: "bob"
    },
    signout: jest.fn()
  };

  const { container } = render(
    <BrowserRouter>
      <NavBar {...props} />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});
