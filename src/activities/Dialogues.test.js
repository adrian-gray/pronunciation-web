import React from "react";
import { cleanup, render } from "@testing-library/react";

import Dialogues from "./Dialogues";

afterEach(cleanup);

test("Dialogues", async () => {
  const props = {
    ipa: "a:",
    dialogues: [
      ["foo", "bar", "baz", "quox"],
      ["apple", "banana", "chad", "elle"]
    ],
    isUserAuth: true
  };

  const { container } = render(<Dialogues {...props} />);

  expect(container).toMatchSnapshot();
});
