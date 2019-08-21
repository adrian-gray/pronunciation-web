import React from "react";
import { render, cleanup } from "@testing-library/react";

import FindTheWords from "./FindTheWords";

afterEach(cleanup);

test("FindTheWords", async () => {
  const props = {
    ipa: "a:",
    words: ["foo", "bar", "baz", "quox", "apple", "banana", "chad", "elle"],
    correct: ["foo", "bar", "baz"],
    userAuth: 1
  };

  const { container } = render(<FindTheWords {...props} />);

  expect(container).toMatchSnapshot();
});
