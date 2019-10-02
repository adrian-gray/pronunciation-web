import React from "react";
import { render, cleanup } from "@testing-library/react";

import Phrases from "./Phrases";

afterEach(cleanup);

test("Phrases", async () => {
  const props = {
    ipa: "z!",
    phrases: ["Zork my fork", "Zoinks, who three that?"]
  };

  const { container } = render(<Phrases {...props} />);

  expect(container).toMatchSnapshot();
});
