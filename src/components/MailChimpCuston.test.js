import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import MailChimpCustom from "./MailChimpCustom";

afterEach(cleanup);

test("MailChimpCustom", async () => {
  const props = {};

  const container = shallow(<MailChimpCustom {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
