import React from "react";
import { render, cleanup } from "@testing-library/react";

import SEO from "./SEO";

afterEach(cleanup);

// TODO how to I test this?
test("SEO", async () => {
  const props = {
    meta: {
      canonical: "www.google.com",
      description: "A lonely lighthouse",
      title: "apple",
      imageFB: "appleFB.jpg",
      imageTW: "appleTW"
    }
  };

  const { container } = render(<SEO {...props} />);

  expect(container).toMatchSnapshot();
});
