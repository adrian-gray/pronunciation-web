import React from "react";
import { render, cleanup } from "@testing-library/react";

import FindTheWords from "./FindTheWords";

afterEach(cleanup);

test("FindTheWords", async () => {
  const props = {
    tag: "~a",
    ipa: "a:",
    words: ["foo", "bar", "baz", "quox", "apple", "banana", "chad", "elle"],
    correct: ["foo", "bar", "baz"],
    isUserAuth: true,
    isHearTheDifference: false
  };

  const { container } = render(<FindTheWords {...props} />);

  expect(container).toMatchSnapshot();
});
