import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import ActivityButton from "./ActivityButton";

afterEach(cleanup);

test("ActivityButton", async () => {
  const props = {
    accessStatus: undefined,
    subscriptionLevel: 0,
    activity: "harry",
    phoneme: "a:"
  };

  const container = shallow(<ActivityButton {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
