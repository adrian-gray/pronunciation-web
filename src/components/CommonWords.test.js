import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import CommonWords from "./CommonWords";

afterEach(cleanup);

test("CommonWords", async () => {
  const props = {
    ipa: "a:",
    words: ["foo", "bar", "baz", "quox", "apple", "banana", "chad", "elle"]
  };

  const { container } = render(<CommonWords {...props} />);

  expect(container).toMatchSnapshot();
});
