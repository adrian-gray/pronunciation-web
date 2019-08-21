import React from "react";
import { render, cleanup } from "@testing-library/react";

import Picker from "./Picker";

afterEach(cleanup);

test("Picker", async () => {
  const props = {
    index: 16,
    colour: "red",
    options: ["cat", "dog", "mouse"],
    selected: 1,
    handleClick: () => "noop"
  };

  const { container } = render(<Picker {...props} />);

  expect(container).toMatchSnapshot();
});
