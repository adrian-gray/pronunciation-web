import React from "react";
import { render, cleanup } from "@testing-library/react";

import WordsMaze from "./WordsMaze";

afterEach(cleanup);

test("WordsMaze", async () => {
  const props = {
    isUserAuth: true,
    tag: "bob",
    ipa: "b~",
    words: ["cat", "dog", "mouse", "bunny", "shoe"],
    correct: ["dog"]
  };

  const { container } = render(<WordsMaze {...props} />);

  expect(container).toMatchSnapshot();
});
