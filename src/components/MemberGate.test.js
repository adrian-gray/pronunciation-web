import React from "react";
import { render, cleanup } from "@testing-library/react";

import MemberGate from "./MemberGate";

afterEach(cleanup);

test("MemberGate authorized", async () => {
  const props = {
    isUserAuth: true,
    content: "Hello"
  };

  const { container } = render(<MemberGate {...props} />);

  expect(container).toMatchSnapshot();
});
