import React from "react";
import { render, cleanup } from "@testing-library/react";

import GoogleSigninButton from "./GoogleSigninButton";

afterEach(cleanup);

test("GoogleSigninButton", async () => {
  const props = {};

  const { container } = render(<GoogleSigninButton {...props} />);

  expect(container).toMatchSnapshot();
});
