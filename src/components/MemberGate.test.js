import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import MemberGate from "./MemberGate";

afterEach(cleanup);

test("MemberGate authorised", async () => {
  const props = {
    userAuth: false
  };

  const container = shallow(<MemberGate {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
