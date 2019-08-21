import React from "react";
import { render, cleanup } from "@testing-library/react";

import SoundTitle from "./SoundTitle";

afterEach(cleanup);

test("SoundTitle", async () => {
  const props = {
    phoneme: "Bob",
    str: "The cat in the hat"
  };

  const { container } = render(<SoundTitle {...props} />);

  expect({ container }).toMatchSnapshot();
});
