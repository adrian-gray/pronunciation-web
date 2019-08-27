import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";

import ActivityButton from "./ActivityButton";

afterEach(cleanup);

test("ActivityButton", async () => {
  const props = {
    accessStatus: "open",
    subscriptionLevel: 0,
    activity: "harry",
    phoneme: "a:"
  };

  const output = render(
    <BrowserRouter>
      <ActivityButton {...props} />
    </BrowserRouter>
  );

  expect(output.container).toMatchSnapshot();
});
