import React from "react";
import { render, cleanup } from "@testing-library/react";

import Movie from "./Movie";

afterEach(cleanup);

test("Movie", async () => {
  const props = {
    ipa: "a:",
    url: "https://foo.com/movie.mpg"
  };

  const { container } = render(<Movie {...props} />);

  expect(container).toMatchSnapshot();
});
