import React from "react";
import { render, cleanup } from "@testing-library/react";

import HowToPronounce from "./HowToPronounce";

afterEach(cleanup);

test("HowToPronounce", async () => {
  const props = {
    ipa: "a:",
    arr: ["foo", "bar"],
    image: {
      url: "foo.com",
      alt: "image",
      title: "image"
    }
  };

  const { container } = render(<HowToPronounce {...props} />);

  expect(container).toMatchSnapshot();
});
