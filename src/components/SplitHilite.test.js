import React from "react";
import { render, cleanup } from "@testing-library/react";

import SplitHilite from "./SplitHilite";

afterEach(cleanup);

test("SplitHilite", async () => {
  const { container } = render(<SplitHilite str="pl~i~zzz~i~sed" />);
  expect(container.firstChild).toMatchSnapshot();
});
