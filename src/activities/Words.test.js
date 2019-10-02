import React from "react";
import { render, cleanup } from "@testing-library/react";

import Words from "./Words";

afterEach(cleanup);

test("Words", async () => {
  const props = {
    ipa: "Pirate",
    words: ["car", "cat", "cad", "cap"]
  };

  const { container } = render(<Words {...props} />);

  expect(container).toMatchSnapshot();
});
