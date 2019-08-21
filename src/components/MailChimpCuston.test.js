import React from "react";
import { render, cleanup } from "@testing-library/react";

import MailChimpCustom from "./MailChimpCustom";

afterEach(cleanup);

test("MailChimpCustom", async () => {
  const props = {};

  const { container } = render(<MailChimpCustom {...props} />);

  expect(container).toMatchSnapshot();
});
