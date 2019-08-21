import React from "react";
import { render, cleanup } from "@testing-library/react";

import Pending from "./Pending";

afterEach(cleanup);

test("Pending", async () => {
  const props = { name: "Bob's Burgers" };

  const { container } = render(<Pending {...props} />);

  expect(container).toMatchSnapshot();
});
