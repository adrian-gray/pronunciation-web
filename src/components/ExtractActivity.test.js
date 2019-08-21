import React from "react";
import { render, cleanup } from "@testing-library/react";

import ExtractActivity from "./ExtractActivity";

afterEach(cleanup);

test("ExtractActivity", async () => {
  const props = {
    props: { poop: "smelly" },
    data: {
      ipa: "a:",
      tag: "mitch",
      activities: {
        "common words": {
          words: [
            "foo",
            "bar",
            "baz",
            "quox",
            "apple",
            "banana",
            "chad",
            "elle"
          ]
        }
      },
      subscriptionLevel: 1
    },
    activityName: "common words"
  };

  const { container } = render(<ExtractActivity {...props} />);

  expect(container).toMatchSnapshot();
});
