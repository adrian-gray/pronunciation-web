import React from "react";
import { render, cleanup } from "@testing-library/react";

import NewsStories from "./NewsStories";

afterEach(cleanup);

test("NewsStories", async () => {
  const props = {
    headline: "A story",
    title: "About a boy",
    sentences: ["the cat OPTION had a rat"],
    options: ["foo", "bar"],
    userAuth: 1
  };

  const { container } = render(<NewsStories {...props} />);

  expect(container).toMatchSnapshot();
});
