import React from "react";
import { render, cleanup } from "@testing-library/react";

import Tile from "./Tile";

afterEach(cleanup);

test("Tile", async () => {
  const props = {
    handleClick: () => "word",
    isCorrect: true,
    index: 1,
    word: "Grease"
  };

  const { container } = render(<Tile {...props} />);

  expect(container).toMatchSnapshot();
});
