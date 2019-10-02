import React from "react";
import { render, cleanup } from "@testing-library/react";

import OddOneOut from "./OddOneOut";

afterEach(cleanup);

test("OddOneOut", async () => {
  const props = {
    ipa: "a:",
    tag: "long-a",
    rows: [["the", "cat", "sat"], ["on", "the", "mat"]],
    correct: ["the", "on"],
    example: ["three", "blind", "moice"],
    exampleHilite: 3,
    isUserAuth: true
  };

  const { container } = render(<OddOneOut {...props} />);

  expect(container).toMatchSnapshot();
});
