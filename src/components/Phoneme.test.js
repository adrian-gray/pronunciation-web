import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";

import Phoneme from "./Phoneme";

afterEach(cleanup);

test("Phoneme", async () => {
  const props = {
    phoneme: "long-z",
    ipa: "z:!",
    tag: "zzzz",
    title: "Long Zorro",
    words: ["zoo", "zork", "zorb"]
  };

  const { container } = render(
    <BrowserRouter>
      <Phoneme {...props} />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});
