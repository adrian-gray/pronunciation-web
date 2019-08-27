import React from "react";
import { render, cleanup } from "@testing-library/react";

import ExtractActivity from "./ExtractActivity";

afterEach(cleanup);

test("ExtractActivity", async () => {
  const sampleData = {
    ipa: "a:",
    tag: "mitch",
    activities: {
      "common words": {
        words: ["foo", "bar", "baz", "quox", "apple", "banana", "chad", "elle"]
      }
    }
  };

  const { container } = render(
    <ExtractActivity
      activityName="common words"
      data={sampleData}
      subscriptionLevel={1}
      props
    />
  );

  expect(container).toMatchSnapshot();
});
