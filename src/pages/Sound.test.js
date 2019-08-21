import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";

import Sound from "./Sound";

afterEach(cleanup);

test("Sound", async () => {
  const props = {
    match: {
      params: {
        phoneme: "long-e"
      }
    }
  };

  const { container } = render(
    <BrowserRouter>
      <Sound {...props} />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});
