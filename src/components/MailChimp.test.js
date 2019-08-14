import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import MailChimp from "./MailChimp";

afterEach(cleanup);

test("MailChimp", async () => {
  const props = {};

  const container = shallow(<MailChimp {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
