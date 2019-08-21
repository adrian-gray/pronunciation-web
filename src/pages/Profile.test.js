import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";

import Profile from "./Profile";

afterEach(cleanup);

test("Profile", async () => {
  const props = {
    user: {
      displayName: "Bob",
      photoURL: "foo.com/biteMe.jpg"
    }
  };

  const { container } = render(
    <BrowserRouter>
      <Profile {...props} />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});
