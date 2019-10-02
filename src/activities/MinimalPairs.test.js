import React from "react";
import { render, cleanup } from "@testing-library/react";

import MinimalPairs from "./MinimalPairs";

afterEach(cleanup);

test("MinimalPairs", async () => {
  const props = {
    ipa: "a:",
    tag: "dork",
    pairs: [["fat", "cat"], ["happy", "dog"]],
    isUserAuth: true
  };

  const { container } = render(<MinimalPairs {...props} />);

  expect(container).toMatchSnapshot();
});
