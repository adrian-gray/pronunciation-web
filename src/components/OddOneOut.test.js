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
    exampleHilite: "three",
    userAuth: 1
  };

  const { container } = render(<OddOneOut {...props} />);

  expect(container).toMatchSnapshot();
});
