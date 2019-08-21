import React from "react";
import { render, cleanup } from "@testing-library/react";

import OddOneOut from "./OddOneOut";

afterEach(cleanup);

test("OddOneOut", async () => {
  const props = {
    ips: "a:",
    rows: [["the", "cat", "sat"], ["on", "the", "mat"]],
    example: ["three", "blind", "moice"],
    exampleHilite: "three"
  };

  const { container } = render(<OddOneOut {...props} />);

  expect(container).toMatchSnapshot();
});
