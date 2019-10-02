import React from "react";
import { render, cleanup } from "@testing-library/react";

import CommonWords from "./CommonWords";

afterEach(cleanup);

test("CommonWords", async () => {
  const props = {
    isUserAuth: true,
    tag: "aa",
    isHearTheDifference: false,
    correct: ["cat"],
    ipa: "a:",
    words: ["foo", "bar", "baz", "quox", "apple", "banana", "chad", "elle"]
  };

  const { container } = render(<CommonWords {...props} />);

  expect(container).toMatchSnapshot();
});
