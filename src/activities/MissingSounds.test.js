import React from "react";
import { render, cleanup } from "@testing-library/react";

import MissingSounds from "./MissingSounds";

afterEach(cleanup);

test("MissingSounds", async () => {
  const props = {
    ipa: "a:",
    tag: "short-a",
    words: [
      "ran",
      "answer",
      "band",
      "start",
      "axe",
      "all",
      "thanks",
      "black",
      "table",
      "name"
    ],
    answers: ["start", "all", "table", "name"],
    isUserAuth: true
  };

  const { container } = render(<MissingSounds {...props} />);

  expect(container).toMatchSnapshot();
});
