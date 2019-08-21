import React from "react";
import { render, cleanup } from "@testing-library/react";

import MailChimp from "./MailChimp";

afterEach(cleanup);

test("MailChimp", async () => {
  const props = {};

  const { container } = render(<MailChimp {...props} />);

  expect(container).toMatchSnapshot();
});
