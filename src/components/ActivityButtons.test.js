import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, cleanup } from "@testing-library/react";

import ActivityButtons from "./ActivityButtons";

afterEach(cleanup);

test("ActivityButtons", async () => {
  const props = {
    activityNames: [
      "foo",
      "bar",
      "baz",
      "quox",
      "apple",
      "banana",
      "chad",
      "elle"
    ]
  };

  const output = render(
    <BrowserRouter>
      <ActivityButtons {...props} />
    </BrowserRouter>
  );

  expect(output.container).toMatchSnapshot();
});
