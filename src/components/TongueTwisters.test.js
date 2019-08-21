import React from "react";
import { render, cleanup } from "@testing-library/react";

import TongueTwisters from "./TongueTwisters";

afterEach(cleanup);

test("TongueTwisters", async () => {
  const props = {
    tag: "B!",
    tongueTwisters: [
      "The cat can't cope crying",
      "My mum must make melon molasses"
    ]
  };

  const { container } = render(<TongueTwisters {...props} />);

  expect(container).toMatchSnapshot();
});
